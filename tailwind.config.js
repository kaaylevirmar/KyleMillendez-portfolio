/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				Oswald: ['Oswald', 'sans-serif'],
			},
		},

		backgroundImage: {
			'hero-pattern': "url('./assets/bgimg.jpg')",
			'Navbar-Background': "url('./assets/NavBackground.jpg')",
		},
	},
	plugins: [],
};
