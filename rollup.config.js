import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";
import postcssUrl from "postcss-url";

const components = [
  {
    name: "OOAdventAnnounce",
    input: "src/OOAdventAnnounce/OOAdventAnnounce.jsx",
  },
  { name: "footer-menu", input: "src/footer-menu/footer-menu.jsx" },
  { name: "OOHeader", input: "src/OOHeader/OOHeader.jsx" },
];

export default components.map((component) => ({
  input: component.input,
  output: {
    file: `dist/${component.name}/index.js`,
    format: "cjs",
  },
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
      plugins: [
        postcssUrl({
          url: (asset) => {
            if (asset.url.startsWith("../../images")) {
              return asset.url.replace("../../images", "./images");
            } else if (asset.url.startsWith("../../../images")) {
              return asset.url.replace("../../../images", "./images");
            } else if (asset.url.startsWith("../../../../images")) {
              return asset.url.replace("../../../../images", "./images");
            }
            return asset.url;
          },
        }),
      ],
      extract: true,
      minimize: true,
    }),
    copy({
      targets: [
        {
          src: `src/${component.name.toLowerCase()}/images/*`,
          dest: `dist/${component.name}/images`,
        },
      ],
    }),
    terser(),
  ],
  external: ["react", "react-dom", "next", "next/link"],
}));
