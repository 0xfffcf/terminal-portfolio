import { Box, Center, Text } from '@chakra-ui/react'

import Input from './input';

const Terminal: React.FC = () => {
  return (
    <Box>
      <Box width={'100wv'} height={'100vh'}>
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
            debian@0xf: ~
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