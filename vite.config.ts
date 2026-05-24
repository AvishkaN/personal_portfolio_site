import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const projectSlugs = [
  "intelligent-robotic-arm",
  "self-driving-car-pipeline",
  "fire-detection-model",
  "high-accuracy-face-recognition",
  "local-llm-fine-tuning-pipeline",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // @ts-expect-error — ssgOptions is injected by vite-react-ssg, not in Vite's core types
  ssgOptions: {
    script: "async",
    formatting: "minify",
    includedRoutes(paths: string[]) {
      return [
        ...paths,
        ...projectSlugs.map((slug) => `/projects/${slug}`),
      ];
    },
  },
}));
