/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "#ffffff",  // Your background color
          foreground: "#171717",  // Your foreground color
          primary: "#FF5733",     // Example for primary color
          secondary: "#C70039",   // Example for secondary color
          // Add more colors as needed
        },
      },
    },
    plugins: [],
  };
  