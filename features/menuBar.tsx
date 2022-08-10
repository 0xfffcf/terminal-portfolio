import { Avatar, Box, Flex, IconButton, useColorMode } from '@chakra-ui/react';

const MenuBar: React.FC = () => {
  return (
    <Box h='5em' w='100%' pos='absolute'>
      <Flex>
        <Box ml='auto' pt='1.5em' pr='1.5em'>
          <a href='https://github.com/0xfffcf'>
            <Avatar
              name='0xfffcf'
              src='https://avatars.githubusercontent.com/u/101296800?v=4'
              boxSizing='content-box'
              border='1.7px solid #4299E1'
              shadow='md'
            />
          </a>
        </Box>
      </Flex>
    </Box>
  );
};

export default MenuBar;
