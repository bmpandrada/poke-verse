module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    { pattern: /bg-\[/ },
    { pattern: /bg-size/ },
    { pattern: /bg-position/ },
    { pattern: /blur/ },
    { pattern: /mix-blend/ },
    { pattern: /mask/ },
    { pattern: /animate-/ },
    { pattern: /opacity-/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
