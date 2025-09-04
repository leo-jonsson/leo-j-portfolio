// tailwind.config.js
const { heroui } = import("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@heroui/theme/dist/components/image.js"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      addCommonColors: true,
    }),
  ],
};
