const defaultTheme = require('tailwindcss/defaultTheme')

const tailwindColors = []

const colorSafeList = []
for (const colorName in tailwindColors)
{
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

  const pallette = tailwindColors[colorName]

  if (typeof pallette === "object")
  {
    shades.forEach((shade) => {
      if (shade in pallette) {
        colorSafeList.push(`text-${colorName}-${shade}`)
        colorSafeList.push(`bg-${colorName}-${shade}`)
      }
    })
  }
}

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
  safelist: colorSafeList,
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