import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({articles}) {
 console.log(articles,"articles");
  return (
    <>
      <Head>
        <title>Web dev</title>
        <meta name='keywords' content='web development,programming'/>
      </Head>
      <h1>Home page</h1>
      {articles.map( a => <h3>{a.title}</h3>)}
    </>
  )
}

export const getStatics = async()=> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const articles = await res.json();
  console.log(articles,"articles")
  return {
    props: {
      articles
    }
  }
}


