/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sxl: "1250px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "card-secondary": "hsl(var(--bg-basic-secondary))",
        "card-secondary-hover": "hsl(var(--bg-basic-secondary-hover))",
        subtitle: "hsl(var(--clr-text-200))",
        tags: "var(--clr-neutral-400)",
      },
    },
  },
  plugins: [],
};
