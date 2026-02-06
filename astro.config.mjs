import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://skydimo.com/config
export default defineConfig({
  site: "https://pc-ambilight-lighting.com/",
  integrations: [tailwind(), icon(), sitemap()],
});
