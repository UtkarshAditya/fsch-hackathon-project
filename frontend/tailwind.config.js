module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mediguardian-teal': '#2ec4b6',
        'mediguardian-purple': '#5f27cd',
        'mediguardian-darkblue': '#1a1f71',
        'mediguardian-blue': '#0077b6',
      },
    },
  },
  plugins: [],
}