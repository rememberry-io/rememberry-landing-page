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
    <article>
      <Image src={traffic_light} alt='dongs' />
      <p> Join the waitlist 👀</p>
      <p> Sign up to be one of the first to enhance your learning experience using rememberry 🫐.</p>
      <form onSubmit={onSubmit}>
        <input type='email' name='email' />
        <button type='submit'>Submit</button>
      </form>
    </article>
  )
}
