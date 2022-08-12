import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
    ],
    server: {
      host: "0.0.0.0",
      port: 5000,

    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
