import type { Config } from 'tailwindcss'

const config: Config = {
  prefix:'b7-',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'vermelho': '#ff0000',
        'vermelhoescuro': '#990000'
      }
    },
  },
  plugins: [],
}
export default config
