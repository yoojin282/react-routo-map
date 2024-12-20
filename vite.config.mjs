import path from "path";
import { defineConfig } from "vite";

const __dirname = path.resolve();

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@yoojin282/react-routo-map",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    minify: "esbuild",
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: { reporter: ["json"] },
  },
});
