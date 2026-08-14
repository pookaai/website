/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#0a0a0a",
          darker: "#050505",
        },
        offwhite: {
          DEFAULT: "#e8e8e8",
          muted: "#a0a0a0",
          dim: "#6a6a6a",
        },
        ember: {
          DEFAULT: "#ea6a12",
          dim: "#c2410c",
        },
      },
      fontFamily: {
        display: ["\"Fraunces\"", "Georgia", "serif"],
        sans: ["\"DM Sans\"", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "hero-lg": ["7rem", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
