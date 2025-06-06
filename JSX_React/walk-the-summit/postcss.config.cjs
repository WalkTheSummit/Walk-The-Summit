// export default {
//   plugins: [
//     import('@tailwindcss/postcss').then(mod => mod.default || mod),
//     import('autoprefixer').then(mod => mod.default || mod),
//   ],
// };

// export const plugins = [
//   require('tailwindcss'),
//   require('autoprefixer'),
// ];

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};