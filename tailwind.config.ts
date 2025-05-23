
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Apple-inspired colors
				slate: {
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
          dark: "#495670",
          "900": "#0A2540"
        },
        gray: {
          "100": "#F7F7F7",
          "200": "#EEEEEE",
          "300": "#E0E0E0",
          "400": "#BDBDBD",
          "500": "#9E9E9E",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121"
        },
        apple: {
          blue: "#0071E3",
          gray: "#F5F5F7",
          "dark-gray": "#1D1D1F",
          "light-gray": "#86868B"
        }
			},
			fontFamily: {
				sans: ['"SF Pro Display"', 'Inter', 'sans-serif'],
				display: ['"SF Pro Display"', 'Inter', 'sans-serif'],
				text: ['"SF Pro Text"', 'Inter', 'sans-serif'],
				mono: ['Menlo', 'Monaco', 'Consolas', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
          			'0%': { 
            			opacity: '0',
            			transform: 'translateY(20px)'
          			},
          			'100%': { 
            			opacity: '1',
            			transform: 'translateY(0)'
          			},
        		},
        		'float': {
          			'0%, 100%': {
            			transform: 'translateY(0)'
          			},
          			'50%': {
            			transform: 'translateY(-10px)'
          			}
        		}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'float': 'float 6s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
