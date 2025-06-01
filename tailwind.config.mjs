/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      serif: ["Merriweather", "ui-serif", "Georgia", '"Times New Roman"', "serif"],
      mono: ['"Source Code Pro"', '"JetBrains Mono"', "ui-monospace", '"Courier New"', "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
