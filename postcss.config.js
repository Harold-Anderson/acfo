module.exports = {
  plugins: [
    require('tailwindcss')({
      config: './tailwind.config.js', // Adjust path as needed
    }),
    require('autoprefixer'),
  ],
};
