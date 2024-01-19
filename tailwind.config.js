/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        part: "url('/images/poulty.jpg')",
        hero1: "url('/images/chick.jpg')",
        hero3: "url('/images/goat.jpg')",
        gallery: "url('/images/gallery.jpg')",
      },
    },
  },
  plugins: [],
};
