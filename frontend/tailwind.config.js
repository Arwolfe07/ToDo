/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
    "node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {},
    colors: {
      'primary': '#f7542e',
      'secondary': '#bc72fe',
      'fontcolor': '#33383c',
      'bgwhite': '#ececec',
      'other': '#f87d61'
    }
  },
  plugins: [require('flowbite/plugin'),],
}

