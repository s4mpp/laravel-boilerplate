import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
      "./vendor/s4mpp/admin-panel/views/**/*.blade.php",
      "./vendor/s4mpp/element/views/**/*.blade.php",
      "./vendor/s4mpp/laraguard/views/**/*.blade.php",
    ],
    darkMode: 'selector',
    theme: {
      extend: {
        colors: {
        'primary': colors.indigo,
        'secondary': colors.blue,
        'base': colors.neutral,
        }
      },
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'class',
        }),
    ],
  }
