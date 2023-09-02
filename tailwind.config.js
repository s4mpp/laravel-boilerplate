const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./vendor/s4mpp/admin-panel/views/**/*.blade.php",
	"./vendor/s4mpp/element/views/**/*.blade.php",
	"./vendor/s4mpp/input/views/**/*.blade.php",
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
		colors: {},
		fontFamily: {
			sans: ['Inter var', ...defaultTheme.fontFamily.sans],
		},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}