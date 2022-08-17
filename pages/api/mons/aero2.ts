// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  imageUrl: string
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ 
//     name: 'aero', 
//     imageUrl: '/images/aero.png' })
  
// }

export default function handler(req:any, res:any) {
  // const { pid } = req.query
  res.end(
    `aero: ${
        res.status(200).json({ 
    name: 'aero', 
    imageUrl: '/images/aero.png' })
    }`
    )
}