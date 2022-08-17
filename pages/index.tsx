import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react'



const Home: NextPage = () => {


  const [data, setData] = useState<any>(null)
  const [monstersByType, setMonstersByType] = useState<any>(null)
  const [specificMonsterData, setSpecificMonsterData] = useState<any>(null)
  const [isLoading, setLoading] = useState<any>(true)

  
  
  useEffect(() => {
    setLoading(true)

    fetch('/api/allMonsters')
      .then((res) => res.json())
      .then((x) => {
        setData(x)
        setLoading(false)
        // console.log(data)
      })
    fetch('/api/abra')
      .then((res) => res.json())
      .then((x) => {
        setSpecificMonsterData(x)
        setLoading(false)
        // console.log(specificMonsterData)
      })
    fetch('/api/psychic')
      .then((res) => res.json())
      .then((x) => {
        setMonstersByType(x)
        setLoading(false)
        // console.log(x)
      })
  }, [])

  

  return (
    <div className={styles.container}>
      <Head>
        <title>CyberPokeAPI</title>
        <meta name="description" content="An API serving data about cyberpunk style mons" />
        
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico?v=1.1" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        

         {data ? <Image src={data[1].image1Url} 
         alt="Vercel Logo" 
         width={'100%'} 
         height={'100%'} /> : ""} 

         {specificMonsterData ? <Image src={specificMonsterData.image1Url} 
         alt="Vercel Logo" 
         width={'100%'} 
         height={'100%'} /> : ""} 

         {monstersByType ? <Image src={monstersByType[0].image1Url} 
         alt="Vercel Logo" 
         width={'100%'} 
         height={'100%'} /> : ""} 
         {monstersByType ? <Image src={monstersByType[0].backgroundImageUrl} 
         alt="Vercel Logo" 
         width={'100%'} 
         height={'100%'} /> : ""} 


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
