import type { NextApiRequest, NextApiResponse } from "next";
import { WaitlistClient } from "../NewsletterClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const auth = req.headers.authorization;
  const correctAuth = process.env.AUTH_TOKEN!;
  if (auth !== correctAuth) 
    return res.status(401).send({ success: false, content: "error unauthorized"});

  const waitlistClient = new WaitlistClient();

  const emailEntry = await waitlistClient.findAll();

  if (emailEntry[0])
    return res
      .status(400)
      .send({ success: false, content: `error ${emailEntry[0]}` });

  res.status(200).send({ success: true, content: emailEntry[1] });
}
