import { Box, Text } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong  } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Input.module.scss';

import { handleOnBlur } from '../utils/handleOnBlur';
import { useCallback, useState } from "react";

const Input: React.FC = () => {
    const [inputSize, setInputSize] = useState(1);
    const [commandResult, setCommandResult] = useState([{input: '', response: ''}]);

    const resetInput = useCallback((event: any) => {
        event.target.value = '';
        setInputSize(1);
    }, []);

    const handleKeyUp = useCallback((event: any) => {
        switch (event.key) {
            case 'Enter':
                if (inputSize > 1) {
                    handleCommand(event.target.value);
                    resetInput(event);
                }
                break;
            case 'Backspace':
                if (inputSize > 1) {
                    setInputSize(inputSize - 9.1);
                } else if (inputSize < 1) {
                    resetInput(event);
                } else setInputSize(inputSize);
                break;
            default:
                setInputSize(inputSize + 9.1);
            }
    }, [inputSize]);

    const handleCommand = useCallback((command: string) => {
        switch (command.toLowerCase()) {
            case 'clear':
                setCommandResult([{ input: '', response: ''}]);
                break;
            case 'help':
                setCommandResult(commands => {
                    return [...commands, {
                        input: command,
                        response: 'Availables Commands: ["Experience", "Market", "Skills", "Social"]' 
                    }]
                });
                break
            case 'experience':
                setCommandResult(commands => {
                    return [...commands, {
                        input: command,
                        response: 'Currently working as a Full-Stack with Angular - GraphQL - SQL/Mongo' 
                    }]
                });
                break;
            default:
                setCommandResult(commands => {
                    return [...commands, {
                        input: command,
                        response: 'Oopsi... This command does not exist!'
                    }]
                });
                break;
        }
    }, [commandResult]);

    return (
        <Box>
            <span>
                {
                    commandResult.map((result, index) => 
                        <span key={index}>
                            <Text style={{display: 'inline'}} top='-7px' pos={'relative'}>
                                {result.input}
                            </Text>
                            <Box>
                                {result.response}
                            </Box>
                            <Text mt={'5px'} overflow={'auto'} display="inline-block">
                                <FontAwesomeIcon icon={faArrowRightLong}/>
                                &nbsp;~
                            </Text>
                            &nbsp;
                        </span>
                    )
                }
            </span>

            <span className={styles.blinker}>
            <input
                style={{width: `${inputSize}px`}}
                className={styles.userInput}
                type="text" 
                name="command input"
                autoFocus
                onKeyDownCapture={handleKeyUp}
                onBlur={handleOnBlur}
            />
            </span>
      </Box>
    )
}

export default Input