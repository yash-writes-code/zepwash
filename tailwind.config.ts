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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				zep: {
					blue: {
						50: '#E6F5FF',
						100: '#CCEAFF',
						200: '#99D5FF',
						300: '#66C0FF',
						400: '#33ABFF',
						500: '#0096FF',
						600: '#0078CC',
						700: '#005A99',
						800: '#003C66',
						900: '#001E33'
					},
					green: {
						50: '#E8F7EF',
						100: '#D1EFDF',
						200: '#A3DFBF',
						300: '#75CF9F',
						400: '#47BF7F',
						500: '#1AAF5F',
						600: '#158C4C',
						700: '#106939',
						800: '#0A4626',
						900: '#052313'
					},
					purple: {
						500: '#8a5cf6',
						600: '#7c4ddd'
					}
				}
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				inter: ['Inter', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%': { transform: 'translateY(0) translateX(0) rotate(0)' },
					'33%': { transform: 'translateY(-10px) translateX(10px) rotate(5deg)' },
					'66%': { transform: 'translateY(5px) translateX(-5px) rotate(-5deg)' },
					'100%': { transform: 'translateY(0) translateX(0) rotate(0)' }
				},
				'pulse-slow': {
					'0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
					'50%': { transform: 'scale(1.05)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-down': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 10s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.6s ease-out forwards'
			},
			backgroundImage: {
				'hero-pattern': "url('/lovable-uploads/fa008476-bb06-4f1b-ac9c-1887b4b69ef0.png')",
				'cars-pattern': "url('/lovable-uploads/059f1128-7374-403c-a6ef-a4480a1aabd4.png')",
				'card-gradient': "linear-gradient(to right, #0096FF, #1AAF5F)"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;