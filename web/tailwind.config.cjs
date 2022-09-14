/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans:['Inter', 'sans-serif']
    },
    extend: {
    
      backgroundImage:{
        background:"url('/bg.png')",
        'gradient-nlw': 'linear-gradient(99.86deg, #9572FC 13.08%, #43E7AD 67.94%, #E1D55D 84.57%)',
        'box-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },
    },
  },
  plugins: [],
}
