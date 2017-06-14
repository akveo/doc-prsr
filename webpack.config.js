const { createConfig, entryPoint, setOutput } = require('@webpack-blocks/webpack2');
const typescript = require('@webpack-blocks/typescript');

module.exports = createConfig([
  entryPoint('./src/index.ts'),
  setOutput('./build/bundle.js'),
  typescript(),
  () => ({target: 'node'}),
]);