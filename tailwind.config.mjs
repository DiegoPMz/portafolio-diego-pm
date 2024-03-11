/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				Yellow :  "#F7F900",
				Gray : "#AEAEAE",
				Black : "#0F0F0F"
			},
			screens : {
				'1xl': {'min': '1440px'},
				'3xl': {'min': '1660px'},
			}
		},
	},
	plugins: [],
}
