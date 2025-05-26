/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2.5rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1300px",
        xl: "1480px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        white: "#ffffff",
        "off-white": "#f0f7ff", // Slightly blue tinted off-white
        primary: {
          DEFAULT: "#0066ff", // Vibrant blue
          hover: "#0052cc", // Darker blue for hover
          dark: "#1a75ff", // Brighter blue for dark mode
        },
        secondary: {
          DEFAULT: "#0a2d5c", // Dark blue
          hover: "#0e3872", // Slightly lighter dark blue for hover
          dark: "#0a2d5c", // Same dark blue for dark mode
        },
        background: {
          DEFAULT: "#ffffff", // White background for light mode
          dark: "#0a1929", // Dark blue background for dark mode
          darker: "#061220", // Even darker blue for dark mode
        },
        foreground: {
          DEFAULT: "#0a2d5c", // Dark blue text for light mode
          light: "#2c5282", // Medium blue for light mode secondary text
          dark: "#e6f0ff", // Light blue-tinted white for dark mode
          muted: "#4a6fa0", // Muted blue for less important text
        },
        muted: {
          DEFAULT: "#e6f0ff", // Very light blue for light mode
          dark: "#0e3872", // Dark blue for dark mode
          foreground: "#2c5282", // Medium blue for light mode
          "foreground-dark": "#a3c2f5", // Light blue for dark mode
        },
        border: {
          DEFAULT: "#cce0ff", // Light blue border for light mode
          dark: "#0e3872", // Dark blue border for dark mode
          hover: "#99c2ff", // Medium light blue for hover in light mode
          "dark-hover": "#1a4b91", // Medium dark blue for hover in dark mode
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "slide-in": "slide-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "gradient-x": "gradient-x 15s ease infinite",
        blob: "blob 7s infinite",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
