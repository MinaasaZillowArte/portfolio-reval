import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing dark/light mode setup
        background: "var(--background)", // '#0a0a0a' in dark, '#ffffff' in light
        foreground: "var(--foreground)", // '#ededed' in dark, '#171717' in light

        // New application-specific palette
        app: {
          primary: '#1e293b',    // slate-800
          secondary: '#334155',  // slate-700
          accent: '#ef4444',     // red-500
          'accent-hover': '#dc2626', // red-600
          text: {
            primary: '#f8fafc',    // slate-50
            secondary: '#cbd5e1', // slate-300
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
