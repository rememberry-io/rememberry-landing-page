import type { NextApiRequest, NextApiResponse } from 'next'
import { WaitlistClient } from '../../NewsletterClient'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { emailId } = req.query

  if (!(typeof emailId === 'string' || emailId instanceof String)) 
    return res.status(400).send({success: true, content: "Please enter correct slug"})

  const waitlistClient = new WaitlistClient();

  const deletedEntry = await waitlistClient.deleteById(emailId as string);

  if (deletedEntry[0])
    return res.status(400).send({success: true, content: `error ${deletedEntry[0]}`})

  res.status(200).send('<html><head><meta name="robots" content="noindex,nofollow"></head><body>Your Email was successfully Deleted</body></html>')
}
