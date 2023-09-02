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
	<div className='rounded-lg text-center mx-10 shadow-2xl p-12'>
    	<article>
      	<h3 className='font-semibold text-lg'> Join the waitlist 👀</h3><br></br>
      	<p className='text-zinc-500 text-xs leading-6'> Sign up to be one of the first to enhance your learning experience using rememberry 🫐.</p><br></br>
	  	<div className='relative align-middle'>
			<form onSubmit={onSubmit}>
        		<input type='text' className='rounded-l border-1 border-b text-xs p-2 rounded-md pl-3 pr-8 py-2 w-full focus:outline-none focus:border-blue-300' placeholder='Email address' name='email'/>
        		<button className='absolute top-1/2 right-3 transform -translate-y-1/2 py-2 focus:outline-none text-xs text-zinc-500' type='submit'> -&gt; </button>
      		</form>
	  	</div>
    	</article>
	</div>
  )
}
