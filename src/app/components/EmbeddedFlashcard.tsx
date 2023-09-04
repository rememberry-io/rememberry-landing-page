'use client';
import Image from 'next/image'
import traffic_light from '../../../public/trafic_lights.svg'
import { FormEvent } from 'react'

export default function EmbeddedFlashcard() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email')?.toString()!;

    const response = await fetch('/api/newsletter/submit', {
      method: 'POST',
      body: email,
    })

  }

  return (
    <article className='rounded-lg'>
      <Image src={traffic_light} alt='dongs' />
      <h3 className='font-bold'> Join the waitlist 👀</h3><br></br>
      <p> Sign up to be one of the first to enhance your learning experience using rememberry 🫐.</p><br></br>
      <div className=''>
        <form onSubmit={onSubmit}>
          <input type='email' className='rounded-l border-2' placeholder='Email address' name='email' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </article>
  )
}
