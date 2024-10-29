import { Poppins,STIX_Two_Text,Puppies_Play ,Sriracha, Metal } from 'next/font/google'
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
  subsets: ['latin'],
  variable: '--font-kalam'
})
const puppies = Puppies_Play({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-puppies'
})
const joaneitalic = localFont({ 
  src: './fonts/JoaneItalic-ExtraLight.woff',
  style:'italic',
  weight: '400',
  variable: '--font-joaneitalic'
})
const allinpiska = localFont({ 
  src: './fonts/Allin-Priska.ttf',
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
        --font-puppies: ${puppies.style.fontFamily};
        --font-joaneitalic: ${joaneitalic.style.fontFamily};
        --font-allinpiska: ${allinpiska.style.fontFamily};
      }`}
    </style>
    <Component {...pageProps} />
  </>
  )
}
