/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      maxWidth:{
        'container':'1144px',
      },
      colors: {
        'secondary': '#282828',
        'primary': '#ffffff',
        'boderyello': '#FFB800',
        'navbg': '#F40404',
        'tcolor': '#6C6C6C',
      },

      backgroundImage: {
        'banner': "url('assets/banner.svg')",
        'service01': "url('assets/service01.svg')",
        'learnimg': "url('assets/learnimg.svg')",
        'blog1': "url('assets/blog1.svg')",
        'blog2': "url('assets/blog2.svg')",
        'blog3': "url('assets/blog3.svg')",
      }
    },
  },
  plugins: [],
}


