import { Avatar, Box, Flex } from '@chakra-ui/react';

import { motion } from 'framer-motion';
import { fadeIn } from 'utils/variants';

const MenuBar: React.FC = () => {
  return (
    <Box
      h='5em'
      w='100%'
      pos='absolute'
      as={motion.div}
      variants={fadeIn}
      initial='initial'
      animate='animate'
    >
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
