import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import css from "rollup-plugin-import-css";

import packageJson from "./package.json";

export default {
  input: "./src/GridSelect.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react", "react-proptypes"],
  plugins: [peerDepsExternal(), css(), resolve(), commonjs(), typescript()],
};
