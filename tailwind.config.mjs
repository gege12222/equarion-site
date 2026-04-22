/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'equi-green': '#1F4D3A',
				'equi-beige': '#F3EFE7',
				'equi-brown': '#8B6B4A',
				'equi-white': '#FAFAF7',
				'equi-black': '#222222',
			},
			fontFamily: {
				serif: ['"Cormorant Garamond"', 'serif'],
				sans: ['Manrope', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
