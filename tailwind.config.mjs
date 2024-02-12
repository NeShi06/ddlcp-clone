/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		fontFamily: {
			'riffic': ['Riffic', 'sans-serif', 'system-ui'],
			'aller': ['Aller', 'sans-serif', 'system-ui'],
		},
		extend: {
			colors: {
				'doki-sayori': '#9ccaff',
				'doki-sayori-text': '#21538e',
				'doki-natsuki': '#ffa7e3',
				'doki-natsuki-text': '#80104f',
				'doki-yuri': '#a9a5ff',
				'doki-yuri-text': '#4c169b',
				'doki-monika': '#9ff3bc',
				'doki-monika-text': '#0b5e27',
				'doki-magenta': '#e61484',
				'doki-light-magenta': '#f35fae',
				'doki-purple': '#831f8a',
				'doki-pink': '#f38cc3',
				'doki-light-pink': '#ffcaee',
				'doki-lighter-pink': '#ffe9f5'
			},
      screens: {
        'ipad': { 'raw': '(min-height: 900px) and (min-width: 1024px) and (max-width: 1280px)' }
      },
			animation: {
				'up': 'Up 1s forwards',
			},
			keyframes: {
				'Up': {
					'0%': {
						transform: 'translateY(2.5rem)',
						"background-size": "80px",
						"background-position": "50%"
					},
					'100%': {
						transform: 'translateY(calc(var(--top) * -1))',
					}
				},
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
