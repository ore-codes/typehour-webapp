/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/chunks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        neutral: '#96c624',
        primary: '#4CAF50',
        secondary: '#083E2C',
        text: '#0C2039',
        light: '#F5F5F5',
        dark: '#292D32',
        placeholder: '#9095A1',
        white: '#FFFFFF',
        danger: '#E33629',
        lightGrey: '#FBFBFB',
        warning: '#E8871E',
      },
    },
  },
};
