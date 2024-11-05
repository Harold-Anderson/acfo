// postcss.config.mjs
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss({
      config: './tailwind.config.mjs', // Ensure this path is correct
    }),
    autoprefixer(),
  ],
};
