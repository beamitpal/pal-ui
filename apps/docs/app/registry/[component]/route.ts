import { track } from '@vercel/analytics/server';
import { type NextRequest, NextResponse } from 'next/server';
import { getPackage } from '../../../lib/package';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
type RegistryParams = {
  params: Promise<{ component: string }>;
};

export const GET = async (_: NextRequest, { params }: RegistryParams) => {
  const { component } = await params;
  
  // 📌 Special case: index.json → list all available components
  if (component === 'index.json') {
    try {
      const ignoreList = ['typescript-config'];
      const packagesDir = join(process.cwd(), '..', '..', 'packages');
      const dirs = await readdir(packagesDir, { withFileTypes: true });

      const components = dirs
        .filter(
          (dirent) =>
            dirent.isDirectory() && !ignoreList.includes(dirent.name)
        )
        .map((dirent) => dirent.name);

      return NextResponse.json(components);
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to list components', details: String(error) },
        { status: 500 }
      );
    }
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
