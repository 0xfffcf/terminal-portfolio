import { Box, Center, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { fadeIn } from 'utils/variants';

import Input from './input';

const Terminal: React.FC = () => {
  return (
    <Box pos='relative' top='27%' pl='1em' pr='1em'>
      <Box
        as={motion.div}
        variants={fadeIn}
        initial='initial'
        animate='animate'
        m='auto'
        fontSize='0.95rem'
        color='rgb(229, 231, 237)'
        bgColor='blackAlpha.900'
        maxW='1044px'
        minW='300px'
        minH='340px'
        boxShadow='dark-lg'
        borderRadius='10px'
      >
        <Center fontSize='0.84rem' lineHeight='2.5rem'>
          <Text as='span' color='red.400'>
            debian
          </Text>
          <Text as='span' color='blue.400'>
            @
          </Text>
          username:&nbsp;
          <Text as='span' color='blue.400'>
            ~
          </Text>
        </Center>

        <Box ml='1rem'>
          <Text>
            <Text as='span' color='red.400'>
              Welcome
            </Text>{' '}
            to my{' '}
            <Text as='span' color={'blue.400'}>
              portfolio
            </Text>
            !{' '}
            <Text as='span' color='red.400'>
              -
            </Text>{' '}
            Type{' '}
            <Text as='span' color={'blue.400'}>
              help
            </Text>{' '}
            to see a list of{' '}
            <Text as='span' color='red.400'>
              supported
            </Text>{' '}
            commands
            <Text as='span' color='blue.400'>
              .
            </Text>
          </Text>
          <Input />
        </Box>
      </Box>
    </Box>
  );
};

export default Terminal;
