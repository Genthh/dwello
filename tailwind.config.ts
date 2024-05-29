import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "480px", // Custom small screen size
        sm: "640px", // Tailwind's default small screen size
        md: "768px", // Tailwind's default medium screen size
        lg: "1024px", // Tailwind's default large screen size
        xl: "1280px", // Tailwind's default extra-large screen size
        "2xl": "1536px", // Tailwind's default 2x extra-large screen size
        // Add any other custom screen sizes here
      },
    },
  },
  plugins: [],
};

export default config;
