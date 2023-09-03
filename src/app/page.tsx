import Image from 'next/image'
import rememberryLogo from "../../public/rememberry-logo.svg"
import EmbeddedFlashcard from './components/EmbeddedFlashcard'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex-column'>
    	<Image src={rememberryLogo} alt='rememberryLogo' className="text-center m-auto my-20 " />
	  	<div className='text-center my-8 sm:mb-16'>
      		<h1 className='font-semibold mx-16 text-xl sm:text-2xl lg:text-3xl leading-loose'>Crafting <span className='text-blue-500'>flashcard journeys</span> on the fast lane. 🧠⚡️️</h1><br></br>
      		<p className='text-xs mx-12 leading-loose px-7 text-zinc-400 text-center font-normal sm:text-base'>1min. survey on your learning experience to support our research - click <Link href='https://forms.gle/DVBwsM4SSzQTcysSA' className='underline'>here</Link> :) </p>
		</div>
      	<EmbeddedFlashcard />
		<div className='text-center text-zinc-400 font-light lg:mt-10 lg:text-base text-xs mt-8 leading-loose'>
			<p>Made with 🫐 in Berlin &lt; 3 </p>
		</div>
    </main>

  )
}
