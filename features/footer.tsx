import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <Flex
      justifyContent='center'
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Text pos='absolute' bottom='5' m='auto'>
        Made with ❤️ by{' '}
        <Text as='span' color='blue.400'>
          <a href='https://github.com/0xfffcf'>0xfffcf</a>
        </Text>
      </Text>
    </Flex>
  );
};

export default Footer;
