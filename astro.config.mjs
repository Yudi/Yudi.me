import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), svelte()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
  },
});
