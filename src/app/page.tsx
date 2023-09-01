import Image from 'next/image'
import rememberryLogo from "../../public/rememberry-logo.svg"
import EmbeddedFlashcard from './components/EmpeddedFlashcard'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Image src={rememberryLogo} alt='rememberryLogo' />
      <div className='font-bold'>Crafting flashcard journeys on the fast lane. 🧠⚡️️</div>
      <p>1min. survey on your learning experience to support our research - click <Link href='https://forms.gle/DVBwsM4SSzQTcysSA'>here</Link> :) </p>
      <EmbeddedFlashcard />
      <p>Made with 🫐 in Berlin &lt; 3 </p>
      <p>Your rememberry-Team :)</p>
    </main>
  )
}
