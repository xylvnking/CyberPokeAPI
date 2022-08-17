import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react'



const Home: NextPage = () => {


  const [data, setData] = useState(null)
  const [data2, setData2] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [allData, setAllData] = useState(null)
  
  
  useEffect(() => {
    setLoading(true)

    fetch('/api/mons/allMonData')
      .then((res) => res.json())
      .then((allData) => {
        setAllData(allData)
        setLoading(false)
        console.log(allData)
      })
    fetch('/api/mons/abra')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log(data)
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

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p> */}
        {/* <Image 
        src="/vercel.svg" 
        alt="Vercel Logo"
        
        /> */}


         {/* {allData ? <Image src={allData[0].imageUrl}  */}
         {data ? <Image src={data.imageUrl} 
         
         alt="Vercel Logo" 
         width={'100%'} 
         height={'100%'} /> : ""}
         {data ? <Image src={data.backgroundImageUrl} 
         
         alt="Vercel Logo" 
         width={'100%'} 
         height={'100%'} /> : ""}
         


          { data && <p>{data.abilities[0].name}</p>}
          { data && <p>{data.description}</p>}
          { allData && <p>{allData[1].name}</p>}
          {/* { allData && <p>{data.description}</p>} */}
          {/* <p>{data.name}</p> */}



        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
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
