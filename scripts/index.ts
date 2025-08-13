#!/usr/bin/env node
import { execSync } from 'node:child_process';
import process from 'node:process';
import readline from 'node:readline/promises';

const REGISTRY_BASE = 'https://pal-ui.beamitpal.com';

type ListResponse = string[];

function usage() {
  console.log(`Usage:
  npx pal-ui add [component ...] [flags]
  npx pal-ui add --list

Examples:
  npx pal-ui add           # interactive picker
  npx pal-ui add button    # install directly
  npx pal-ui add --list    # print available components

Environment:
  PAL_UI_REGISTRY=<base>   # override registry base (default: ${REGISTRY_BASE})
`);
}

async function fetchList(): Promise<ListResponse> {
  const url = `${REGISTRY_BASE}/registry/index.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url} (${res.status})`);
  return (await res.json()) as ListResponse;
}

function runShadcnAdd(components: string[], forwardFlags: string[]) {
  for (const name of components) {
    const url = `${REGISTRY_BASE}/registry/${name}.json`;
    console.log(`\nAdding "${name}" from ${url} ...`);
    try {
      const cmd = ['npx', '-y', 'shadcn@latest', 'add', ...forwardFlags, url]
        .map((s) => (/\s/.test(s) ? JSON.stringify(s) : s))
        .join(' ');
      execSync(cmd, { stdio: 'inherit' });
    } catch (err) {
      console.error(`Failed to add "${name}":`, (err as Error)?.message ?? err);
      process.exitCode = 1;
    }
  }
}

function splitFlagsAndNames(tokens: string[]) {
  const names: string[] = [];
  const flags: string[] = [];
  const expectsValue = new Set(['-c', '--config', '--cwd']);
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.startsWith('-')) {
      flags.push(t);
      if (expectsValue.has(t) && i + 1 < tokens.length && !tokens[i + 1].startsWith('-')) {
        flags.push(tokens[++i]);
      }
    } else {
      names.push(t);
    }
  }
  return { names, flags };
}

async function interactivePick(all: string[]): Promise<string[]> {
  // Print in columns with numbers
  const width = process.stdout.columns || 80;
  const maxLen = Math.max(...all.map((s) => s.length)) + 6; // "NN) " + padding
  const perRow = Math.max(1, Math.floor(width / maxLen));

  console.log('\nAvailable components:\n');
  all.forEach((name, idx) => {
    const cell = `${String(idx + 1).padStart(2, ' ')}\) ${name}`;
    const end = (idx + 1) % perRow === 0 ? '\n' : '  ';
    process.stdout.write(cell + end);
  });
  if (all.length % perRow !== 0) process.stdout.write('\n');
  console.log(
    `\nChoose components:
  - Enter numbers separated by commas (e.g. 1,4,9)
  - Or type names separated by spaces (e.g. button badge)
  - Type "all" to install every component
  - Press Enter with nothing to cancel\n`,
  );

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const answer = (await rl.question('Your selection: ')).trim();
  rl.close();

  if (!answer) return [];

  if (answer.toLowerCase() === 'all') {
    return all.slice();
  }

  if (/^\d+[,\d\s]*$/.test(answer)) {
    const nums = answer
      .split(/[,\s]+/)
      .filter(Boolean)
      .map((x) => parseInt(x, 10))
      .filter((n) => Number.isFinite(n) && n >= 1 && n <= all.length);
    const picked = [...new Set(nums)].map((n) => all[n - 1]);
    return picked;
  }

  // treat as names
  const names = answer.split(/\s+/).filter(Boolean);
  const unknown = names.filter((n) => !all.includes(n));
  if (unknown.length) {
    console.error(`Unknown component(s): ${unknown.join(', ')}`);
    return [];
  }
  return names;
}

(async () => {
  const [cmd, ...rest] = process.argv.slice(2);

  if (cmd !== 'add') {
    usage();
    process.exit(1);
  }

  if (rest.includes('--help') || rest.includes('-h')) {
    usage();
    process.exit(0);
  }

  // --list mode
  if (rest.includes('--list')) {
    try {
      const list = await fetchList();
      console.log(JSON.stringify(list, null, 2));
      process.exit(0);
    } catch (e) {
      console.error((e as Error)?.message ?? e);
      process.exit(1);
    }
  }

  const { names: directNames, flags: forwardFlags } = splitFlagsAndNames(rest);

  if (directNames.length > 0) {
    runShadcnAdd(directNames, forwardFlags);
    process.exit(process.exitCode ?? 0);
  }

  // Interactive mode
  try {
    const list = await fetchList();
    const picked = await interactivePick(list);
    if (picked.length === 0) {
      console.log('No components selected. Exiting.');
      process.exit(0);
    }
    runShadcnAdd(picked, forwardFlags);
  } catch (e) {
    console.error((e as Error)?.message ?? e);
    process.exit(1);
  }
})();
