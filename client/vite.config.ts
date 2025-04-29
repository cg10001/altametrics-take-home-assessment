import react from "@vitejs/plugin-react"
import * as path from "node:path"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import packageJson from "./package.json" with { type: "json" }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
  },
})
