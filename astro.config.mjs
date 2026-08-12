import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://pookaai.com",
  output: "static",
  integrations: [tailwind()],
  build: {
    inlineStylesheets: "auto",
  },
});
