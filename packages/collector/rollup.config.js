import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/script.ts", // for browser UMD
    output: [
      {
        file: "dist/psst-collector.js",
        format: "umd",
        name: "psst",
        sourcemap: true,
      },
      {
        file: "dist/psst-collector.min.js", //.min.js for fast serving
        format: "umd",
        name: "psst",
        plugins: [terser()],
      },
    ],
    plugins: [typescript()],
  },
  {
    input: "src/index.ts", // for module-based consumers
    output: {
      file: "dist/index.js",
      format: "esm",
      sourcemap: true,
    },
    plugins: [typescript()],
  },
];
