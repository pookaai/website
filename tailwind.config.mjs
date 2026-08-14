/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#0a0a0a",
          muted: "#6b7280",
        },
        ember: {
          DEFAULT: "#ea6a12",
        },
      },
      fontFamily: {
        sans: ["\"DM Sans\"", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "hero-lg": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};
