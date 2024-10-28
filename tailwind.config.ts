import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "epilogue": "var(--font-epilogue)",
      },
      screens: {
        "Mobile": "414px",
      },
      width: {
        "box-details": "390",
      },
      height: {
        "box-details": "420",
      },

    },
    plugins: [],
  }
};

export default config;
