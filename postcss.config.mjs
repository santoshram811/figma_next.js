const config = {
  plugins: {
    '@tailwindcss/postcss': {}
  },
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      }
    }
  }
};

export default config;
