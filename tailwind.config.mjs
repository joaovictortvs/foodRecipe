/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorTheme1: "var(--colorTheme1)",
        colorTheme2: "var(--colorTheme2)",
        colorTheme3: "var(--colorTheme3)",
        colorTheme4: "var(--colorTheme4)"
      },
    },
  },
  plugins: [],
};
