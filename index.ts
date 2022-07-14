import * as fs from 'fs';
import * as path from 'path';

function find_any_root({
  dirpath,
  end = '/',
  key,
}: {
  dirpath: string;
  key: string;
  end?: string;
}): string | undefined {
  if (dirpath === end) return undefined;
  const files = fs.readdirSync(dirpath);
  if (files.includes(key)) {
    return dirpath;
  } else {
    const parentpath = path.resolve(path.join(dirpath, '..'));
    return find_any_root({ dirpath: parentpath, end, key });
  }
}

export function find_git_root(dirpath: string = __dirname): string | undefined {
  return find_any_root({
    dirpath,
    end: '/',
    key: '.git',
  });
}

export function find_node_root(
  dirpath: string = __dirname
): string | undefined {
  return find_any_root({
    dirpath,
    end: '/',
    key: 'node_modules',
  });
}
