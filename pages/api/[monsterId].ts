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

      case 'allMonsters':
          x = monsterData
          break;

      case 'psychic':
          x = monsterData.filter(x => x.type === 'psychic')
          break;
      case 'rock':
          x = monsterData.filter(x => x.type === 'rock')
          break;
      case 'bug':
          x = monsterData.filter(x => x.type === 'bug')
          break;
      case 'dragon':
          x = monsterData.filter(x => x.type === 'dragon')
          break;
      case 'electra':
          x = monsterData.filter(x => x.type === 'electra')
          break;
      case 'fight':
          x = monsterData.filter(x => x.type === 'fight')
          break;
      case 'fire':
          x = monsterData.filter(x => x.type === 'fire')
          break;
      case 'ghost':
          x = monsterData.filter(x => x.type === 'ghost')
          break;
      case 'grass':
          x = monsterData.filter(x => x.type === 'grass')
          break;
      case 'ground':
          x = monsterData.filter(x => x.type === 'ground')
          break;
      case 'ice':
          x = monsterData.filter(x => x.type === 'ice')
          break;
      case 'normal':
          x = monsterData.filter(x => x.type === 'normal')
          break;
      case 'poison':
          x = monsterData.filter(x => x.type === 'poison')
          break;
      case 'water':
          x = monsterData.filter(x => x.type === 'water')
          break;


      case 'aerodactyl':
      case '142':
          x = monsterData.find(x => x.name === 'Aerodactyl')
          break;

      case 'abra':
      case '63':
          x = monsterData.find(x => x.name === 'Abra')

      }

      if (x) {
        return res.status(200).json(x)
      } 
  }

  res.end(
    
    returnData()

  )
  


}

