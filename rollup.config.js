import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJson from "./package.json";

const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
];

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "esm",
      sourcemap: true,
    },
  ],
  external,
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
  ]
};
