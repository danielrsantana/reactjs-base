/**
 * Transpiles TypeScript to JavaScript code.
 *
 * @link https://github.com/facebook/jest/blob/master/examples/typescript/preprocessor.js
 * @copyright 2004-present Facebook. All Rights Reserved.
 */
const tsc = require("typescript");
const tsConfig = require("./tsconfig.json");
const babelJest = require('babel-jest');

module.exports = {
  process(src, path) {
    if (path.endsWith(".spec.ts") || path.endsWith(".spec.tsx") || path.endsWith(".spec.js")) {
      src = babelJest.process(src, path);
    } else if (path.endsWith(".ts") || path.endsWith(".tsx") || path.endsWith(".js")) {
      return tsc.transpile(src, tsConfig.compilerOptions, path, []);
    }
    return src;
  }
};
