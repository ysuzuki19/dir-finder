import { find_git_root, find_node_root } from './index';
import * as path from 'path';

describe('index.ts', () => {
  test('find_git_root()', () => {
    const res = find_git_root();
    expect(res).toBe(__dirname);
  });

  test('find_git_root("./empty")', () => {
    const basedir = path.join(__dirname, 'empty');
    const res = find_git_root(basedir);
    expect(res).toBe(__dirname);
  });

  test('find_git_root("..")', () => {
    const basedir = path.join(__dirname, '..');
    const res = find_git_root(basedir);
    expect(res).toBe(undefined);
  });

  test('find_node_root()', () => {
    const res = find_node_root();
    expect(res).toBe(__dirname);
  });

  test('find_node_root("./empty")', () => {
    const basedir = path.join(__dirname, 'empty');
    const res = find_node_root(basedir);
    expect(res).toBe(__dirname);
  });

  test('find_node_root("..")', () => {
    const basedir = path.join(__dirname, '..');
    const res = find_node_root(basedir);
    expect(res).toBe(undefined);
  });
});
