import { Box } from '@chakra-ui/react';

interface IResponse {
  text: string;
}

const Response: Function = ({ text }: IResponse) => {
  const paragraph = text
    .split('\n')
    .map((str) => <Box dangerouslySetInnerHTML={{ __html: str }}></Box>);

  return paragraph;
};

export default Response;
