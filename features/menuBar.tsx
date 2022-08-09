import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const MenuBar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box h={'5em'} pos={'absolute'}>
      <Box pt={'1.5em'} pl={'1.5em'}>
        <IconButton
          aria-label='themeChanger'
          onClick={toggleColorMode}
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        />
      </Box>
    </Box>
  );
};

export default MenuBar;
