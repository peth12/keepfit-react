/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#FF8A00",
        
"secondary": "#9ca3af",
        
"accent": "#1dcdbc",
        
"neutral": "#fb923c",
        
"base-100": "#ffff",
        
"info": "#7dd3fc",
        
"success": "#22c55e",
        
"warning": "#fbbd23",
        
"error": "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

