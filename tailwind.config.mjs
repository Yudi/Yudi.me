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
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],
  daisyui: {
    themes: [
      {
        theme: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#3880ff",
          secondary: "#3dc2ff",
          accent: "#5260ff",
          neutral: "#3D4451",
          info: "#3ABFF8",
          success: "#2dd36f",
          warning: "#ffc409",
          error: "#eb445a",
        },
        darkTheme: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#3880ff",
          secondary: "#3dc2ff",
          accent: "#5260ff",
          neutral: "#3D4451",
          info: "#3ABFF8",
          success: "#2dd36f",
          warning: "#ffc409",
          error: "#eb445a",
        },
      },
    ],
    darkTheme: "darkTheme",
  },
};
