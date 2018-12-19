# read-tsconfig-up

[![Travis CI](https://img.shields.io/travis/iguntur/read-tsconfig-up.svg?style=flat-square)](https://travis-ci.org/iguntur/read-tsconfig-up)
[![node](https://img.shields.io/node/v/read-tsconfig-up.svg?style=flat-square)](#)
[![npm](https://img.shields.io/npm/v/read-tsconfig-up.svg?style=flat-square)](https://www.npmjs.org/package/read-tsconfig-up)
[![PRs](https://img.shields.io/badge/PRs-welcome-blue.svg?style=flat-square)](#)

---

## Install

```console
$ npm install read-tsconfig-up
```

## Usage

```js
const readTsconfigUp = require('read-tsconfig-up');

readTsconfigUp().then(result => {
    console.log(result);
    /*
    {
        tsconfig: {
            compilerOptions: {
                outDir: 'dist',
                // ...
            }
        },
        path: '/path/to/project/tsconfig.json'
    }
    */
});

console.log(readTsconfigUp.sync({cwd: './packages/foo'}));
```

## API

### readTsconfigUp(`options`)

- Params:
  - `options`: [`<ReadOptions>`](#readoptions)
- Returns: `Promise<{}>`

### readTsconfig.sync(`options`)

- Params:
  - `options`: [`<ReadOptions>`](#readoptions)
- Returns: `<object>`

#### `ReadOptions`

- `cwd`: `<string>` - Directory to start from.
  - default: `process.cwd()`


## Related

- [read-tsconfig](https://github.com/iguntur/read-tsconfig) - Read `tsconfig.json` file.
- [has-tsconfig](https://github.com/iguntur/has-tsconfig) - Indicates whether the project has `tsconfig.json` file.


## License

MIT © [Guntur Poetra](https://github.com/iguntur)
