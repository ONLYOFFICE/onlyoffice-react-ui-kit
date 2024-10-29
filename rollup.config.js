import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/oo-advent-announce/oo-advent-announce.jsx",
  output: [
    {
      file: "dist/oo-advent-announce.js",
      format: "cjs"
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    json(),
    postcss({
      extract: true,
      minimize: true,
    }),
    copy({
      targets: [
        { src: "src/oo-advent-announce/images/*", dest: "dist/images" },
      ],
    }),
    terser(),
  ],
  external: ["react", "react-dom"],
};