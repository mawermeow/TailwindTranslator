/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'seto': ['seto', 'sans-serif'],
        'makinas': ['makinas', 'sans-serif'],
        'ud': ['ud', 'sans-serif'],
        'ud-b': ['ud-b', 'sans-serif'],
      },
    },
  },
  important: "#TailwindTranslator",
}

// serif 表示預設的襯線字型
// sans-serif 表示預設的無襯線字型
