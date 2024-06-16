import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://yudi.com.br',
  integrations: [mdx(), tailwind(), svelte(), sitemap({
    i18n: {
      defaultLocale: "en",
      locales: ["en", "pt-br"],
      fallback: {
        "pt-br": "en"
      }
    }
  })],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    fallback: {
      "pt-br": "en"
    }
  }
});