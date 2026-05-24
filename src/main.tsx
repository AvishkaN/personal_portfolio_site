import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

// vite-react-ssg@0.9.x looks for the named export 'createRoot' in the SSR bundle
export const createRoot = ViteReactSSG({ routes });
