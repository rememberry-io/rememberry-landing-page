import type { NextApiRequest, NextApiResponse } from 'next'
import { NewsletterClient } from './NewsletterClient'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { emailId } = req.query

  if (!(typeof emailId === 'string' || emailId instanceof String)) 
    return res.status(400).send({err: "Please enter correct slug"})

  console.log(emailId)

  const newsletterClient = new NewsletterClient();

  const updatedNewsletter = await newsletterClient.update(emailId as string, true)

  if (updatedNewsletter[0])
    return res.status(400).send({err: "error "})

  res.status(200).send('<html><head><meta name="robots" content="noindex,nofollow"></head><body>Thanks for confirming!</body></html>')
}
