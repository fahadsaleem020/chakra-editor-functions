import typescript from "rollup-plugin-typescript2";
import { defineConfig } from "rollup";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import pkg from "./package.json" assert { type: "json" };

export default defineConfig([
  {
    input: "index.ts",

    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },

    plugins: [
      terser(),
      typescript({
        tsconfig: "./tsconfig.json",
        tsconfigOverride: {
          exclude: ["src"],
        },
      }),
    ],
    external: ["@tiptap/react", "react"],
  },
  {
    input: pkg.module,
    output: [{ file: pkg.types, format: "esm" }],
    plugins: [dts(), terser()],
  },
]);
