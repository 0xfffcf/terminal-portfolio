import { Text } from '@chakra-ui/react';
import IText from './text';

const Blue: Function = ({ text }: IText) => {
  return (
    <Text as='span' color='blue.400'>
      {text}
    </Text>
  );
};

export default Blue;
