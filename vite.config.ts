import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/taiwan/",
  server: {
    open: "/taiwan/",
  },
  test: {
    environment: "node",
  },
});
