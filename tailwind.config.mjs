/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./Utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./Content/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        min1400: '1400px',
        min425: '425',
        min375:'375',
        min340:'340',
        min330:'330',
      },
      width: {
        custom: '60%', // Example static value
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        redColor:"#b05a7a",
        darkRed:"#6a3649",
        skyBlue:"#91c1c3",
        lightSkyBlue:"#e3eff0",
        lightFontColor:"#5f5f5f",
        lightGreenBackground: "#e3eff0",
        lightBackground: "#f3f8fb",
        darkGreenbackground:"#91c1c3",
        textBlue:"#0000ff",
        darkgreen:"#728e91",
        hoverdarkGreen:"#91adb0"
      },
      boxShadow: {
        custom: '3px 4px 8px 3px rgba(0, 0, 0, .3);',
        customDark: '5px 5px 15px 3px rgba(0, 0, 0, 0.6), -5px -5px 10px 5px rgba(0, 0, 0, 0.3)',
        navBar:'0 0 20px 5px rgba(0,0,0,.4),0 0 40px 10px rgba(0,0,0,.08),0 0 60px 15px rgba(0,0,0,.08)',
        blogShadow:'4px 4px 5px 1px rgba(0, 0, 0, .3)'
      },
    },
  },
  plugins: [],
};
