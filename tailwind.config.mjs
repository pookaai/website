/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f4f7f4",
          100: "#e3ebe3",
          200: "#c5d6c6",
          300: "#9bb89e",
          400: "#6f9474",
          500: "#4f7755",
          600: "#3c5e42",
          700: "#314c36",
          800: "#293e2d",
          900: "#223426",
          950: "#111c14",
        },
        ember: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea6a12",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        cream: "#fbf7f0",
        mist: "#eef3ef",
      },
      fontFamily: {
        display: ["\"Fraunces\"", "Georgia", "serif"],
        sans: ["\"DM Sans\"", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(17, 28, 20, 0.35)",
        card: "0 10px 30px -18px rgba(17, 28, 20, 0.28)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
