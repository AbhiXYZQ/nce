/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <-- Dekhiye yahan change hua hai
    autoprefixer: {},
  },
};

export default config;