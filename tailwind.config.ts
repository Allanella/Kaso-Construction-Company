/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb",
        foreground: "#111827",
        muted: "#6b7280",
        card: "#ffffff",
        primary: "#1d4ed8",
      },
    },
  },
  plugins: [],
}
