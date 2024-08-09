import { author, license, version } from './package.json';

import banner from 'rollup-plugin-banner';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const bannerText = [
  'TOAST UI Editor : React Wrapper',
  `@version ${version} | ${new Date().toDateString()}`,
  `@author ${author}`,
  `@license ${license}`,
].join('\n');

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/esm',
      format: 'es',
      sourcemap: false,
    },
    plugins: [typescript(), commonjs(), nodeResolve(), banner(bannerText)],
    external: [
      'react',
      '@predictive-systems/editor',
      '@predictive-systems/editor/dist/toastui-editor-viewer',
    ],
  },
];
