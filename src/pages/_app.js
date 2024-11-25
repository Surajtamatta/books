import { Poppins,STIX_Two_Text,Montserrat,Puppies_Play,DM_Serif_Text ,Sriracha, Metal } from 'next/font/google'
import "../styles/globals.css";
import localFont from 'next/font/local'
import { ModalProvider } from '../context/modalContext';

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
const dmserif = DM_Serif_Text({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-puppies'
})
const montserrat = Montserrat({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-montserrat'
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
const amerigo = localFont({ 
  src: './fonts/Amerigo-BT.ttf',
  style:'normal',
  weight: '400',
  variable: '--font-amerigo'
})
const winslowtitle = localFont({ 
  src: '/fonts/winslow-title-bold-italic.ttf',
  style:'italic',
  weight: '400',
  variable: '--font-winslowtitle'
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
        --font-amerigo:${amerigo.style.fontFamily};
        --font-dmserif:${dmserif.style.fontFamily};
        --font-winslowtitle:${winslowtitle.style.fontFamily};
        --font-montserrat:${montserrat.style.fontFamily};
      }`}
    </style>
    <ModalProvider>
    <Component {...pageProps} />
    </ModalProvider>
   
  </>
  )
}
