import type { NextApiRequest, NextApiResponse } from 'next'
import { WaitlistClient } from '../../NewsletterClient'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { emailId } = req.query

  if (!(typeof emailId === 'string' || emailId instanceof String)) 
    return res.status(400).send({success: false, content: "Please enter correct slug"})

  const waitlistClient = new WaitlistClient();

  const emailEntry = await waitlistClient.findById(emailId as string)

  if (emailEntry[0])
    return res.status(400).send({success: false, content: `error ${emailEntry[0]}`})

  res.status(200).send({success: true, content: emailEntry[1]})
}
