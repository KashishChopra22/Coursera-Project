/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '992px',
        xl: '1440px',
      },
    extend: {},
  },
  plugins: [],
 
}