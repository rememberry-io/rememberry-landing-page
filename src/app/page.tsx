import Image from 'next/image'
import rememberryLogo from "../../public/rememberry-logo.svg"
import EmbeddedFlashcard from './components/EmbeddedFlashcard'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex-column'>
    	<Image src={rememberryLogo} alt='rememberryLogo' className="text-center m-auto mt-20 " />
	  	<div className='text-center mb-16 mt-8'>
      		<h1 className='font-semibold mx-16 text-xl leading-loose'>Crafting <span className='text-blue-500'>flashcard journeys</span> on the fast lane. 🧠⚡️️</h1><br></br>
      		<p className='text-xs mx-12 leading-loose px-7 text-zinc-500 text-center font-normal'>1min. survey on your learning experience to support our research - click <Link href='https://forms.gle/DVBwsM4SSzQTcysSA' className='underline'>here</Link> :) </p>
		</div>
      	<EmbeddedFlashcard />
		<div className='text-center text-zinc-500 font-light text-xs mt-8 leading-loose'>
			<p>Made with 🫐 in Berlin &lt; 3 </p>
      		<p>Your rememberry-Team :)</p>
		</div>
    </main>

  )
}
