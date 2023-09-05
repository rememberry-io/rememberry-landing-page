import type { NextApiRequest, NextApiResponse } from 'next'
import { NewsletterClient } from './NewsletterClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST")
    return res.status(400).json({ error: "Needs to be a POST method" });

  const email = req.body;

  const newsletterClient = new NewsletterClient();

  const createdEmail = await newsletterClient.create(email);

  if (createdEmail[0])
    return res.status(400).json({ error: createdEmail[0] });

  const url = process.env.OPT_IN_URL! + createdEmail[1]!.id ;

  const emailRelay = process.env.EMAIL_RELAY_URL!;

  const data = await fetch(emailRelay, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa(process.env.MAILWHALE_ID! + ":" + process.env.MAILWHALE_SECRET),
    },
    body: JSON.stringify({
      to: [createdEmail[1]!.email],
      subject: "Double Opt-In: Rememberry",
      html: '<a href="' + url + '">' + url + '</a>'
    })
  });

  console.log(data)


  res.status(201).json(createdEmail[1]);
}
