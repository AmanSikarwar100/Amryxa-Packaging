import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#C9A84C', light: '#E8C97A', dim: '#7A6530', xdim: '#3D3018' },
        bg: { DEFAULT: '#09090A', 2: '#0F0F10', 3: '#161618', 4: '#1C1C1F' },
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
