/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/views/**/*.{js,ts,jsx,tsx,mdx}",


  ],
  theme: {
  	extend: {
		boxShadow:{
			default:"20px 20px 40px 0px rgba(0,0,0,0.61);"
		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  fontFamily: {
			poppins: ['var(--font-poppins)', 'sans-serif'],
			stix:['var(--font-stix)','sans-serif'],
			metal:['var(--font-metal)'],
			sriracha:['var(--font-sriracha)'],
			librecaslondisplay: ['var(--font-librecaslon-display)', 'serif'],
			belleza: ['var(--font-belleza)', 'sans-serif'],
			inters: ['var(--font-inters)', 'sans-serif'],
			markazitext: ['var(--font-markazitext)', 'serif'],
			alkatra: ['var(--font-alkatra)', 'cursive'],
			adventpro: ['var(--font-adventpro)', 'sans-serif'],
			ibarrarealnova: ['var(--font-ibarrarealnova)', 'serif'],
			alegreya: ['var(--font-alegreya)', 'serif'],
			piazzollaa: ['var(--font-piazzollaa)', 'serif'],
			kreon: ['var(--font-kreon)', 'serif'],
			joaneitalic: ['var(--font-joaneitalic)', 'cursive']
		  },
		  
  	}
  },
  plugins: [
	// require("tailwindcss-animate"),
],
};
