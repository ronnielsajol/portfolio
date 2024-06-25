/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			colors: {
				textColor: "#E5E3F0",
				background: "#00001A",
				primary: "#453F8C",
				secondary: "#817EBB",
				accent: "#7CF4B3",
			},
			backgroundImage: {
				hero: "url('/hero.jpg')",
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
