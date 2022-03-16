module.exports = {
	content: [
		"./*.{html,js}",
		"./src/*.vue",
		"./src/**/*.{html,js}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Manrope", "sans-serif"],
			},
			fontSize: {
				'xs': ['0.75rem', '1.25rem'], /* 12px */
				'sm': ['0.875rem', '1.2rem'], /* 14px */
      			'base': ['1rem', '1.4rem'], /* 16px */
				'xl': ['1.125rem', '1.4rem'], /* 18px, for use with H6 */
				'2xl': ['1.313rem', '1.4rem'], /* 21px, for use with H5 */
				'3xl': ['1.5rem', '1.4rem'], /* 24px, for use with H4 */
				'4xl': ['1.75rem', '1.4rem'], /* 28px, for use with H3 */
				'5xl': ['2rem', '1.4rem'], /* 32px, for use with H2 */
				'6xl': ['2.25rem', '1.4rem'], /* 36px, for use with H1 */
			},
			spacing: {
				"safe-top": "env(safe-area-inset-top)",
				"safe-bottom": "env(safe-area-inset-bottom)",
				"safe-left": "env(safe-area-inset-left)",
				"safe-right": "env(safe-area-inset-right)",
			},
			colors: {
				blue: {
					50: '#E3DBFA',
					100: '#C6B7F5',
					200: '#A993F0',
					300: '#8D6FEC',
					400: '#704BE7',
					500: '#5427E2',
					600: '#4019BB',
					700: '#30138C',
					800: '#200D5D',
					900: '#10062F'
				},
				green: {
					50: '#EBFFF5',
					100: '#DCFFED',
					200: '#D6FFEB',
					300: '#C2FFE0',
					400: '#ADFFD6',
					500: '#ADFFD6',
					600: '#57FFAB',
					700: '#02FF80',
					800: '#00AB56',
					900: '#00562B',
				},
				purple: {
					50: '#EFEEFF',
					100: '#E0DDFF',
					200: '#D0CCFF',
					300: '#C0BAFF',
					400: '#B1A9FF',
					500: '#A198FF',
					600: '#',
					700: '#1500F4',
					800: '#0E00A3',
					900: '#070051',
				},
				gray: {
					50: '#ECEDF0',
					100: '#DADAE1',
					200: '#C7C8D3',
					300: '#B4B5C4',
					400: '#A2A3B5',
					500: '#8F90A6',
					600: '#6D6F8A',
					700: '#525367',
					800: '#373745',
					900: '#1B1C22'
				},
				red: {
					500: '#B91C1C',
				},
				orange: {
					500: '#F97316'
				}
			},
			transitionDuration: {
				'0': '0ms'
			},
			minHeight: {
				'325': '325px',
			},
			minWidth: {
				'360-for-dev-not-prod': '360px',
				'450-for-dev-not-prod': '450px',
			},
			maxWidth: {
				'360-for-dev-not-prod': '360px',
				'450-for-dev-not-prod': '450px'
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
	content: ['./public/**/*.html', './src/**/*.vue'],
	options: {
		whitelistPatterns: [
		/-(leave|enter|appear)(|-(to|from|active))$/,
		/^(?!(|.*?:)cursor-move).+-move$/,
		/^router-link(|-exact)-active$/,
		/tooltip/,
		/popover/,
		/notification/,
		],
	}
}