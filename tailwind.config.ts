import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
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
        main: "#093545",
        input: "#224957",
        primary: "#2BD17E",
        card: "#092C39",
        error: "#EB5757",
      },

      fontSize: {
        h1: [
          "64px",
          {
            lineHeight: "80px",
            fontWeight: "600",
          },
        ],
        h2: [
          "48px",
          {
            lineHeight: "56px",
            fontWeight: "600",
          },
        ],
        title: [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        regular: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        info: [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
