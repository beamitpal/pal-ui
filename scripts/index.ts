#!/usr/bin/env node
import { execSync } from 'node:child_process';
import https from 'node:https';

const args = process.argv.slice(2);

if (args.length < 2 || args[0] !== 'add') {
  console.log('Usage: npx pal-ui add [...components]');
  process.exit(1);
}

const packageNames = args.slice(1);
function fetchComponents(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    https.get('https://pal-ui.beamitpal.com/registry/index.json', (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

(async () => {
  try {
    const availableComponents = await fetchComponents();

    for (const packageName of packageNames) {
      if (!packageName.trim()) continue;

      if (!availableComponents.includes(packageName)) {
        console.error(`❌ Component "${packageName}" not found in registry`);
        continue;
      }

      console.log(`➕ Adding ${packageName} component...`);

      const url = new URL(
        `registry/${packageName}.json`,
        'https://pal-ui.beamitpal.com'
      );

      execSync(`npx -y shadcn@latest add ${url.toString()}`, {
        stdio: 'inherit',
      });
    }
  } catch (err) {
    console.error('Error fetching registry index:', err);
    process.exit(1);
  }
})();
