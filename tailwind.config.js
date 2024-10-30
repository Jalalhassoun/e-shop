/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B16AF9",
        grey: "#4E4545",
        "line-pro": "#D3D3D3"

      }
    },
  },
  plugins: [],
}

