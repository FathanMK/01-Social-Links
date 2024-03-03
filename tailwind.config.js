/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-black": "hsl(0,0%,8%)",
        "dark-grey": "hsl(0,0%,12%)",
        "cool-grey": "hsl(0,0%,20%)",
        "cool-green": "hsl(75,94%,57%)"
      },
    },
  },
  plugins: [],
};
