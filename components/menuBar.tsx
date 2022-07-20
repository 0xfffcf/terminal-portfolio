import { Box } from "@chakra-ui/react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-regular-svg-icons";

import styles from '../styles/MenuBar.module.scss';

const MenuBar: React.FC = () => {
    return (
        <Box pos={'absolute'} w={'100vw'} h={'5em'}>
            <Box pt={'2em'} pl={'2em'}>
                <FontAwesomeIcon icon={faMoon} size='2x' className={styles.icon}/>
            </Box>
        </Box>
    )
}

export default MenuBar