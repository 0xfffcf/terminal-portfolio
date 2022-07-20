import { Box, Center, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';


import Input from './input';

const Terminal: React.FC = () => {
  return (
    <Box as={motion.div} variants={fadeIn} initial="initial" animate="animate">
      <Box width={'100%'} height={'100vh'}>
        <Box
          m={'auto'}
          position={'relative'}
          top={'50%'}
          transform={'translateY(-50%)'}
          fontSize={'0.95rem'}
          color={'rgb(229, 231, 237)'} 
          bgColor={'blackAlpha.900'}
          maxW={'1044px'} 
          minW={'400px'} 
          minH={'400px'}
          boxShadow={'dark-lg'}
          borderRadius={'10px'}
        >
          <Center fontSize={'0.84rem'} lineHeight={'2.5rem'}>
            debian@username: ~
          </Center>
          
          <Box ml={'1rem'}>
            <Text >
              Welcome to my portfolio! - Type help to see a list of supported commands.
            </Text>
            <Input/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Terminal