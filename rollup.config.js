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
    input: "src/components/OOAdventAnnounce/OOAdventAnnounce.jsx",
  },
  { name: "OOFooter", input: "src/components/OOFooter/OOFooter.jsx" },
  { name: "OOHeader", input: "src/components/OOHeader/OOHeader.jsx" },
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
          src: `src/components/${component.name.toLowerCase()}/images/*`,
          dest: `dist/${component.name}/images`,
        },
      ],
    }),
    terser(),
  ],
  external: ["react", "react-dom", "next", "next/link"],
}));
