import { defineConfig } from 'tsup'

export default defineConfig({
   entry: ['src/index.tsx'],
   splitting: true,
   sourcemap: true,
   clean: true,
   dts: true,
   format: ["cjs", "esm"],
   minify: true,
   outDir: "dist",
   target: "es2017",
   shims: true,
   treeshake: true,
   jsxFragment: "React.Fragment",
   metafile: true,
   tsconfig: "./tsconfig.json"
})