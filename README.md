# root-finder

TypeScript Library for finding directory.

By this library, you can find git/node root easily in your code.😉

# install

```bash
$ npm i root-finder
```

# How to use

## Find git root

function find by `.git` existing

```typescript
import { find_git_root } from './index';

// find git root
const res = find_git_root(__dirname);
```

## Find node root

function find by `node_modules` existing

```typescript
import { find_git_root } from './index';

// find node root
const res = find_node_root(__dirname);
```
