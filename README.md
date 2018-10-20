electron-starter-ts
===================
[Electron][electron] starter app with [TypeScript][typescript] support.

## Requirements
* [Git][git]
* [NPM][npm]

## Installation
Clone the repository:
```bash
$ git clone https://github.com/Phoenix2k/electron-starter-ts electron-starter-ts
```
Install dependencies:
```bash
$ cd electron-starter-ts
$ npm install
```

## Development
All source files for the Electron app are located in the `src` folder.

### Build the project
```bash
$ npm run build
```
This will automatically lint all `.ts` files in the `src` folder and check for errors before transpiling them to JavaScript. The end result will be stored in the `dist` folder, which is not tracked by version control.

If you run into any errors reported by TSLint, you can try and fix them automatically with:
```bash
$ npm run lint:fix
```

### Start Electron
After the project has been built, you can start the app with the following command:
```bash
$ npm start
```

## Sources
* [Electron Quick Start guide][electron-quick-start]
* [TSLint][ts-lint]
* [TypeScript and Electron The Right Way][typescript-guide]

## License
[![MIT](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE.md)

[electron]: https://electronjs.org/ "Electron"
[electron-quick-start]: https://electronjs.org/docs/tutorial/quick-start "Electron Quick Start guide"
[git]: https://git-scm.com/ "Git version control"
[npm]: https://www.npmjs.com/ "Package manager for Node.js"
[ts-lint]: https://palantir.github.io/tslint/ "TSLint - An extensible linter for the TypeScript language."
[typescript]: https://www.typescriptlang.org/ "TypeScript"
[typescript-guide]: https://medium.com/@davembush/typescript-and-electron-the-right-way-141c2e15e4e1 "TypeScript and Electron The Right Way"
