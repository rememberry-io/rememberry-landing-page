import Image from 'next/image'
import rememberryLogo from "../../public/rememberry-logo.svg"
import EmbeddedFlashcard from './components/EmbeddedFlashcard'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Image src={rememberryLogo} alt='rememberryLogo' className="text-center m-auto mt-24" />
	  	<div className='border-2 mx-24 text-center'>
      		<h1 className='font-semibold text-3xl p-10'>Crafting <span className='text-blue-500'>flashcard journeys</span> on the fast lane. 🧠⚡️️</h1>
      		<p>1min. survey on your learning experience to support our research - click <Link href='https://forms.gle/DVBwsM4SSzQTcysSA' className='underline'>here</Link> :) </p>
		</div>
		<div className='border-2 mx-24 text-center p-6'>
      		<EmbeddedFlashcard />
		</div>
		<div className='text-center'>
			<p>Made with 🫐 in Berlin &lt; 3 </p>
      		<p>Your rememberry-Team :)</p>
		</div>
    </main>
  )
}
