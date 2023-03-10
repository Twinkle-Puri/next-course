import ArticlesList from '@/components/ArticlesList';
import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({articles}) {
  return (
    <>
      <Head>
        <title>Web dev</title>
        <meta name='keywords' content='web development,programming'/>
      </Head>
      <h1>Home page</h1>
      <ArticlesList articles = {articles}/>
    </>
  )
}

export const getStaticProps = async()=> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}


