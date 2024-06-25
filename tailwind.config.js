/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 theme: {
  extend: {
   fontFamily: {
    sans: ['Poppins', 'sans-serif'],
   },
   fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
   },
   colors: {
    textColor: '#E5E3F0',
    background: '#00001A',
    primary: '#453F8C',
    secondary: '#817EBB',
    accent: '#7CF4B3',
   },
   backgroundImage: {
    hero: "url('/hero.jpg')",
   },
  },
 },
 plugins: ['prettier-plugin-tailwindcss'],
}
