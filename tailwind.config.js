const colors = require('tailwindcss/colors');

// tailwind.config.js
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			ruby: '#EF5418',
			black: colors.black,
			white: '#FFFFF7',
			gray: colors.coolGray,
			red: colors.red,
			yellow: colors.amber,
			blue: colors.blue,
			green: colors.green,
		},
		screens: {
			'sm': '320px',
			// => @media (min-width: 320px) { ... }
			't': '600px',
			// => @media (min-width: 768px) { ... }
			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1600px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '2560px',
			// => @media (min-width: 1536px) { ... }
		},
		fontFamily: {
			//sans: ['neue-haas-grotesk-display', 'sans-serif'],
			sans: ['Inter', 'sans-serif'],
			serif: ['minion-pro-display', 'serif'],
		},
	},
};
