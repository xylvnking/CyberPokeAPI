// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  imageUrl: string
}

export default function handler(req:any, res:any) {
  res.status(200).json({ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" })
  
  
}
