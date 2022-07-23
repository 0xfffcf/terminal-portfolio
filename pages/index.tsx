import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import MenuBar from '../components/menuBar'
import Terminal from '../components/terminal'

const Home: NextPage = () => {
  return (
    <Box h={'100vh'}>
      <Head>
        <title>0xfffcf</title>
        <meta charSet='utf-8'/>
        <meta name="description" content="Hi, I am 0xfffcf a web developer. I am currenlty working with Angular, NextJs and more!"/>
        <meta name="keywords" content="portfolio, web designer, web developer, fullstack"/>
        <meta name="author" content="0xfffcf"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <MenuBar/>
      <Terminal/>
    </Box>
  )
}

export default Home