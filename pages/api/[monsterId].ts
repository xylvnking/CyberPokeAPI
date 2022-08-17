// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { monsterData } from './data/monsterData'

type Data = {
  name: string,
  imageUrl: string
}


export default function handler(req:any, res:any) {
  const { monsterId } = req.query

  function returnData() {
    let x:any
    
    switch(monsterId) {
      case 'allMonData':
          x = monsterData
          break;
      case 'aerodactyl':
          x = monsterData.find(x => x.name === 'Aerodactyl')
          break;
      case '63':
      case 'abra':
          x = monsterData.find(x => x.name === 'Abra')
      }

      return res.status(200).json(x)
  }

  res.end(
    
    returnData()

  )
  


}

