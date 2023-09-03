'use client';
import Image from 'next/image'
import { FormEvent } from 'react'

export default function EmbeddedFlashcard() {
  async function onSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData
    })

    const data = await response.json();
  }

  return (
	<div className='rounded-lg text-center mx-10 shadow-2xl p-12 sm:max-w-[80%] sm:m-auto md:m-auto md:max-w-[60%] xl:max-w-[50%] max-w-2xl'>
    	<article>
      	<h3 className='font-semibold text-lg sm:text-2xl'> Join the waitlist 👀</h3><br></br>
      	<p className='text-zinc-400 text-xs leading-6 sm:text-base sm:leading-8 pb-4'> Sign up to be one of the first to enhance your learning experience using <span className='font-bold'>rememberry</span> 🫐.</p><br className='leading-8'></br>
	  	<div className='relative align-middle'>
			<form onSubmit={onSubmit}>
        		<input type='text' className='rounded-l border-1 border-b text-xs p-2 rounded-md pl-3 pr-8 py-2 w-full focus:outline-none focus:border-blue-300' placeholder='Email address' name='email'/>
        		<button className='absolute top-1/2 right-3 transform -translate-y-1/2 py-2 focus:outline-none text-xs text-zinc-400' type='submit'> -&gt; </button>
      		</form>
	  	</div>
    	</article>
	</div>
  )
}
