import { Box, Center, Text, useMediaQuery } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { fadeIn } from 'utils/variants';

import Blue from './color/blue';
import Red from './color/red';

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
        minH={['300px', null, null, '340px']}
        maxH='500px'
        boxShadow='dark-lg'
        borderRadius='10px'
        overflow='auto'
      >
        <Center fontSize='0.84rem' lineHeight='2.5rem'>
          <Text as='span' color='red.400'>
            debian
          </Text>
          <Text as='span' color='blue.400'>
            @
          </Text>
          0xfffcf
          <Red text=':' />
          &nbsp;
          <Text as='span' color='blue.400'>
            ~
          </Text>
        </Center>

        <Box ml='1rem'>
          <Text>
            <Red text='Welcome' /> to my <Blue text='portfolio' />
            ! <Red text='-' /> Type <Blue text='help' /> to see a list of{' '}
            <Red text='supported' /> commands
            <Blue text='.' />
          </Text>
          <Input />
        </Box>
      </Box>
    </Box>
  );
};

export default Terminal;
