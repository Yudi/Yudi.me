import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://yudi.com.br",

  integrations: [
    mdx(),
    svelte(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          "pt-br": "pt-br",
        },
      },
    }),
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    fallback: {
      "pt-br": "en",
    },
  },

  output: "server",
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },
});
