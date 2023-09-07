import type { NextApiRequest, NextApiResponse } from "next";
import { WaitlistClient } from "../../NewsletterClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { emailId } = req.query;

  if (!(typeof emailId === "string" || emailId instanceof String))
    return res
      .status(400)
      .send({ success: false, content: "Please enter correct slug" });

  const waitlistClient = new WaitlistClient();

  const updatedNewsletter = await waitlistClient.updateOptIn(
    emailId as string,
    true,
  );

  if (updatedNewsletter[0])
    return res
      .status(400)
      .send({ success: false, content: `error ${updatedNewsletter[0]}` });

  res
    .status(200)
    .send(
      '<html><head><meta name="robots" content="noindex,nofollow"></head><body><p>Thanks for confirming!</p><br><a href="https://rememberry.io">Back to the Home Page</a></body></html>',
    );
}
