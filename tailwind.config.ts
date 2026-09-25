import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        softnex: {
          dark: '#0a1628',
          'dark-light': '#0f1f38',
          blue: '#00a8ff',
          'blue-light': '#33b8ff',
          'blue-dark': '#0088cc',
          cyan: '#00d4ff',
          purple: '#6366f1',
          pink: '#ec4899',
          orange: '#f97316',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #0a1628 0%, #0f1f38 50%, #0a1628 100%)',
        'gradient-blue': 'linear-gradient(135deg, #00a8ff 0%, #00d4ff 100%)',
        'gradient-purple': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'gradient-pink': 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
        'grid-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300a8ff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        'dots-pattern': `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300a8ff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 12s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 168, 255, 0.5), 0 0 40px rgba(0, 168, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 168, 255, 0.8), 0 0 80px rgba(0, 168, 255, 0.4)' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(0, 168, 255, 0.6), 0 0 60px rgba(0, 168, 255, 0.3), inset 0 0 20px rgba(0, 168, 255, 0.2)'
          },
          '50%': {
            boxShadow: '0 0 50px rgba(0, 168, 255, 0.9), 0 0 100px rgba(0, 168, 255, 0.5), inset 0 0 30px rgba(0, 168, 255, 0.3)'
          },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
