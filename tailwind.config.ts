import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-primary': 'rgba(161, 207, 221, 1)',
        'light-primary-2': ' rgba(208, 231, 238, 1)',
        'light-primary-3': 'rgba(227, 241, 245, 1)',
        'light-primary-4': 'rgba(244, 247, 250, 1)'
      }
    },
  },
  plugins: [],
}
export default config
