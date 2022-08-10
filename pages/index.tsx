import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Terminal from 'features/terminal';
import MenuBar from '@/features/menuBar';

const Home: NextPage = () => {
  return (
    <Box h={'100vh'}>
      <Head>
        <title>0xfffcf</title>
        <meta charSet='utf-8' />
        <meta
          name='description'
          content='Hi, I am 0xfffcf a web developer. I am currenlty working with Angular, NextJs and more!'
        />
        <meta
          name='keywords'
          content='portfolio, web designer, web developer, fullstack'
        />
        <meta name='author' content='0xfffcf' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <MenuBar />
      <Terminal />
      <Flex justifyContent='center'>
        <Text pos='absolute' bottom='5' m='auto'>
          Made with ❤️ by{' '}
          <Text as='span' color='blue.400'>
            <a href='https://github.com/0xfffcf'>0xfffcf</a>
          </Text>
        </Text>
      </Flex>
    </Box>
  );
};

export default Home;
