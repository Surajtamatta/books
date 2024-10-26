import { Poppins,STIX_Two_Text ,Sriracha, Metal,Kalam,Libre_Caslon_Display,Belleza,Inter,Markazi_Text,Alkatra,Advent_Pro,Ibarra_Real_Nova,Alegreya,Piazzolla,Kreon, } from 'next/font/google'
import "../styles/globals.css";
import localFont from 'next/font/local'

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-poppins'
})
const stix_two_text = STIX_Two_Text({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-stix'
})

const metal = Metal({
  weight: '400',   
  style: 'normal',   
  subsets: ['latin'],
  variable: '--font-metal'
});
const sriracha = Sriracha({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-kalam'
})
const libre_caslon_display = Libre_Caslon_Display({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-librecaslon-display'
})
const belleza = Belleza({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-belleza'
})
const inter = Inter({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable:'--font-inter'
})
const markazi_text = Markazi_Text({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-markazitext'
})
const alkatra = Alkatra({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-alkatra'
})
const advent_pro = Advent_Pro({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable:'--font-adventpro'
})

const ibarra_real_nova = Ibarra_Real_Nova({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable:'--font-ibarrarealnova'
})
const alegreya = Alegreya({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable:'--font-alegreya'
})
const piazzolla = Piazzolla({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable:'--font-piazzolla'
})
const kreon = Kreon({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable:'--font-kreon'
})
const joaneitalic = localFont({ 
  src: './fonts/JoaneItalic-ExtraLight.woff',
  style:'italic',
  weight: '400',
  variable: '--font-joaneitalic'
})
export default function App({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
      :root {
        --font-poppins: ${poppins.style.fontFamily};
        --font-stix: ${stix_two_text.style.fontFamily};
        --font-metal: ${metal.style.fontFamily};
        --font-sriracha: ${sriracha.style.fontFamily};
        --font-librecaslon-display: ${libre_caslon_display.style.fontFamily};
        --font-belleza: ${belleza.style.fontFamily};
        --font-inters: ${inter.style.fontFamily};
        --font-markazitext: ${markazi_text.style.fontFamily};
        --font-alkatra: ${alkatra.style.fontFamily};
        --font-adventpro: ${advent_pro.style.fontFamily};
        --font-ibarrarealnova: ${ibarra_real_nova.style.fontFamily};
        --font-alegreya: ${alegreya.style.fontFamily};
        --font-piazzollaa: ${piazzolla.style.fontFamily};
        --font-kreon: ${kreon.style.fontFamily};
        --font-joaneitalic: ${joaneitalic.style.fontFamily};
      }`}
    </style>
    <Component {...pageProps} />
  </>
  )
}
