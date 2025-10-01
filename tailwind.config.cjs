/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FD9A00',
          'orange-light': 'rgba(253, 154, 0, 0.1)',
          'orange-hover': 'rgba(245, 134, 0, 1)',
          dark: '#0C0000',
          crimson: '#F9AE19ff',
          'orange-fire': 'hsla(33, 100%, 48%, 1)',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(253, 154, 0, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(253, 154, 0, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};