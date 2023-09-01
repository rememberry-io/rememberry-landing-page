import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body

  res.status(200).json({ "dongs": 2 })
}
