/** @type {import('tailwindcss').Config} */

export default module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      //
    },
    extend: {
      maxWidth: {
        '8x1': '1398px',
      },
      colors: {
        'background': 'rgb(18, 18, 20)',
        'color-text': 'rgb(166, 166, 177)',
        'color-text-hover': 'rgb(224, 224, 229)',
        'main-purple': 'rgb(153, 109, 255)'
      },
    },
  },
  plugins: [],
}
