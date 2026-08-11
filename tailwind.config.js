/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      /*
      |--------------------------------------------------------------------------
      | BRAND COLORS
      |--------------------------------------------------------------------------
      | Keep all website colors here.
      | Change them here later to re-theme the entire website.
      */
      colors: {
        brand: {
          primary: "#0B1F33",
          secondary: "#1769AA",
          accent: "#F5A623",

          "primary-light": "#123552",
          "secondary-light": "#2D8CDB",
          "accent-dark": "#D88900",

          background: "#F5F7FA",
          surface: "#FFFFFF",

          text: "#243447",
          muted: "#6B7785",

          border: "#DCE3EA",
        },
      },

      /*
      |--------------------------------------------------------------------------
      | GRADIENTS
      |--------------------------------------------------------------------------
      */
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #0B1F33 0%, #123552 55%, #1769AA 100%)",

        "secondary-gradient":
          "linear-gradient(135deg, #1769AA 0%, #2D8CDB 100%)",

        "accent-gradient": "linear-gradient(135deg, #F5A623 0%, #D88900 100%)",
      },

      /*
      |--------------------------------------------------------------------------
      | SHADOWS
      |--------------------------------------------------------------------------
      */
      boxShadow: {
        "brand-sm": "0 4px 15px rgba(11, 31, 51, 0.08)",
        brand: "0 10px 30px rgba(11, 31, 51, 0.12)",
        "brand-lg": "0 20px 50px rgba(11, 31, 51, 0.18)",
        button: "0 8px 20px rgba(23, 105, 170, 0.25)",
      },

      /*
      |--------------------------------------------------------------------------
      | BORDER RADIUS
      |--------------------------------------------------------------------------
      */
      borderRadius: {
        brand: "10px",
        "brand-lg": "16px",
      },

      /*
      |--------------------------------------------------------------------------
      | ANIMATIONS
      |--------------------------------------------------------------------------
      */
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "slide-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-15px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "slide-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },

      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "slide-right": "slide-right 0.6s ease-out",
      },

      /*
      |--------------------------------------------------------------------------
      | FONT
      |--------------------------------------------------------------------------
      */
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },

  plugins: [],
};
