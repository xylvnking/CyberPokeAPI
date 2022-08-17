// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  imageUrl: string
}

const allMonData = [
  {

      name: 'Aerodactyl',
      description: `A ferocious prehistoric creature that goes for the enemy's throat with its serrated saw-like fangs.`,
      imageUrl: '/images/aero.png',
      backgroundImageUrl: '/images/rockType.jpg',
      nationalNumber: 142,
      type: 'rock',
      hp: 60,
      abilities: [
        {
          name: 'Wing Attack',
          damage: 30
        }
      ]
  },

  {
      name: 'Abra',
      description: `A ferocious prehistoric mon that goes for the enemy's throat with its serrated saw-like fangs.`,
      imageUrl: '/images/abra.png',
      backgroundImageUrl: '/images/rockType.jpg',
      nationalNumber: 63,
      type: 'psychic',
      hp: 30,
      abilities: [
        {
          name: 'Psyshock',
          descriptopn: `Flip a coin. If heads, the Defending creature is now Paralyzed`,
          damage: 10
        }
      ]
  },
  {
      name: 'pika', 
      imageUrl: '/images/chu.png'
  }
]



export default function handler(req:any, res:any) {
  const { monId } = req.query
  
  // function returnRequestedData() {
  //   if (monId == 'aero') {
  //     `aero: ${
  //         res.status(200).json({ 
  //     name: 'aero', 
  //     imageUrl: '/images/aero.png' })
  //     }`
      
  //   } else if (monId == 'abra') {
  //       `abra: ${
  //           res.status(200).json({ 
  //       name: 'abra', 
  //       imageUrl: '/images/abra.png' })
  //       }`
        
  //   } else if (monId == 'allMonData') {
  //       `allMonData: ${
  //         res.status(200).json(allMonData)
  //       }`
    
      
  //   }
  // }

  // function returnData() {
  //   switch(monId) {
  //     case 'allMonData':
  //         allMonData
  //         break;
  //     case 'aero':
  //         return allMonData.find(x => x.name === 'aero')
  //     case 'abra':
  //         return allMonData.find(x => x.name === 'aero')
          
   
  //     }
  // }
  function returnData() {
    let x
    
    switch(monId) {
      case 'allMonData':
          x = allMonData
          break;
      case 'aerodactyl':
          x = allMonData.find(x => x.name === 'Aerodactyl')
          break;
      case 'abra':
          x = allMonData.find(x => x.name === 'Abra')
      }

      return res.status(200).json(x)
  }

  res.end(
    
    returnData()
    // `${res.status(200).json(returnData())}`
    // returnRequestedData()
  )
  




  // if (monId == 'aero') {
  //     res.end(
  //       `aero: ${
  //           res.status(200).json({ 
  //       name: 'aero', 
  //       imageUrl: '/images/aero.png' })
  //       }`
  //       )
  // } else if (monId == 'abra') {
  //     res.end(
  //       `abra: ${
  //           res.status(200).json({ 
  //       name: 'abra', 
  //       imageUrl: '/images/abra.png' })
  //       }`
  //       )
  // } else if (monId == 'allMonData') {
  //     res.end(

  //       // `allMonData: ${
  //       //   res.status(200).json([{
  //       //       name: 'aero',
  //       //       imageUrl: '/images/aero.png'
  //       //   },
  //       //   {
  //       //       name: 'abra', 
  //       //       imageUrl: '/images/abra.png'
  //       //   }])
  //       // }`
  //       `allMonData: ${
  //         res.status(200).json(allMonData())
  //       }`

  //     )
  // }





}

