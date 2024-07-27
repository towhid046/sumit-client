/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary-color': '#815efe',
        'secondary-color': '#8566d9',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dim", 'dark', "winter"],
  },
};
