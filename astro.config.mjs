import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://skydimo.com/config
export default defineConfig({
  site: "https://skydimo.com/",
  integrations: [tailwind(), icon()],
});
