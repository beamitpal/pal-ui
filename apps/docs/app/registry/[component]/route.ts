import { track } from '@vercel/analytics/server';
import { type NextRequest, NextResponse } from 'next/server';
import { getPackage } from '../../../lib/package';
import { readFile } from 'node:fs/promises';
import { join, basename } from 'node:path';
type RegistryParams = {
  params: Promise<{ component: string }>;
};

export const GET = async (_: NextRequest, { params }: RegistryParams) => {
  const { component } = await params;
  if (component.endsWith('.json')) {
    const componentName = basename(component, '.json'); 

    const shadcnIndexPath = join(process.cwd(), '..', '..', 'packages', 'shadcn-ui', 'index.tsx');
    const indexContent = await readFile(shadcnIndexPath, 'utf-8');


    const exportedComponents =
      indexContent
        .match(/export\s+\*\s+from\s+['"]\.\/components\/ui\/([a-z0-9-]+)['"]/gi)
        ?.map(line => line.match(/\.\/components\/ui\/([a-z0-9-]+)/i)?.[1])
        .filter(Boolean) || [];

    if (!exportedComponents.includes(componentName)) {
      throw new Error(`Shadcn component "${componentName}" not found in index.tsx`);
    }

    return {
      $schema: 'https://ui.shadcn.com/schema/registry.json',
      homepage: `https://pal-ui.beamitpal.com/components/${componentName}`,
      name: componentName,
      type: 'registry:ui',
      author: 'Amit <me@beamitpal.com>',
      dependencies: [],
      devDependencies: [],
      registryDependencies: [componentName],
      files: []
    };
  }



  if (!component.endsWith('.json')) {
    return NextResponse.json(
      { error: 'Component must end with .json' },
      { status: 400 }
    );
  }

  const packageName = component.replace('.json', '');

  if (process.env.NODE_ENV === 'production') {
    try {
      await track('Registry download', {
        component: packageName,
      });
    } catch (error) {
      console.error(error);
    }
  }

  try {
    const pkg = await getPackage(packageName);

    return NextResponse.json(pkg);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get package', details: error },
      { status: 500 }
    );
  }
};
