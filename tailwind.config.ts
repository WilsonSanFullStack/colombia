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
      colors: {
        personal: "#256F5C",
        personal1: "#2B4970",
        personal2: "#AA7F39",
        personal3: "#AA6339",
      },
      height: {
        custom: "88.2vh",
      },
    },
    screens: {
      movil: { min: "220px", max: "440px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      tablet: { min: "441px", max: "750px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      laptop: { min: "751px", max: "1280px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;
