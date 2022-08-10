import { Box, Text } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/Input.module.scss';

import { handleOnBlur } from 'utils/handleOnBlur';
import { useCallback, useState } from 'react';
import Response from './response';
import Blue from './color/blue';

const Input: React.FC = () => {
  const [inputSize, setInputSize] = useState(1);
  const [commandResult, setCommandResult] = useState([
    { input: '', response: '' },
  ]);

  const resetInput = useCallback((event: any) => {
    event.target.value = '';
    setInputSize(1);
  }, []);

  const handleKeyUp = useCallback(
    (event: any) => {
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
    },
    [inputSize]
  );

  const handleCommand = useCallback(
    (command: string) => {
      switch (command.toLowerCase()) {
        case 'clear':
          setCommandResult([{ input: '', response: '' }]);
          break;
        case 'help':
          setCommandResult((commands) => {
            return [
              ...commands,
              {
                input: command,
                response:
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  'Availables ' +
                  '</p>' +
                  'Commands' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  ': ' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  '[' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  '"' +
                  '</p>' +
                  'Clear' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  '"' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  ', ' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  '"' +
                  '</p>' +
                  'Experience' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  '"' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  ', ' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  '"' +
                  '</p>' +
                  'Market' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  '"' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  ', ' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  '"' +
                  '</p>' +
                  'Skills' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  '"' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  ']' +
                  '</p>',
              },
            ];
          });
          break;
        case 'experience':
          setCommandResult((commands) => {
            return [
              ...commands,
              {
                input: command,
                response:
                  'Currently ' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  'working ' +
                  '</p>' +
                  'as a ' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  'Full' +
                  '</p>' +
                  '-' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  'Stack ' +
                  '</p>' +
                  'with ' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  'Angular ' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  '- ' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  'GraphQL' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  ' - ' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  'SQL' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  '/' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  'Mongo' +
                  '</p>',
              },
            ];
          });
          break;
        case 'market':
          setCommandResult((commands) => {
            return [
              ...commands,
              {
                input: command,
                response:
                  'Contact' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  ' me' +
                  '</p>' +
                  ' if you need a ' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  'website' +
                  '</p>' +
                  '. Create a pull request to my <a href="https://github.com/0xfffcf/0xfffcf.io">' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  'repo.' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  ' (' +
                  '</p>' +
                  'Click Here' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  ')' +
                  '</p>' +
                  '</a>',
              },
            ];
          });
          break;
        case 'skills':
          setCommandResult((commands) => {
            return [
              ...commands,
              {
                input: command,
                response:
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  'Languages' +
                  '</p>' +
                  ': HTML, CSS, ' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  'JS' +
                  '</p>' +
                  ', C/C++, ' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  'Python, ' +
                  '</p>' +
                  'Golang, Bash, ' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  'Java' +
                  '</p>' +
                  ', SQL...\n' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  'Framework' +
                  '</p>' +
                  ': ' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  'Angular' +
                  '</p>' +
                  ', NextJS, React, ChakraUI, ' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  'Tailwindcss' +
                  '</p>' +
                  ', Graphql, Express' +
                  '<p style="color: var(--chakra-colors-red-400); display: inline;">' +
                  '...\n' +
                  '</p>' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  'Technologies' +
                  '</p>' +
                  ': Git, OpenCV, ' +
                  '<p style="color: var(--chakra-colors-blue-400); display: inline;">' +
                  'Ocr' +
                  '</p>' +
                  '...',
              },
            ];
          });
          break;
        default:
          setCommandResult((commands) => {
            return [
              ...commands,
              {
                input: command,
                response: 'Oopsi... This command does not exist!',
              },
            ];
          });
          break;
      }
    },
    [commandResult]
  );

  return (
    <Box>
      <span>
        {commandResult.map((result, index) => (
          <span key={index}>
            <Text style={{ display: 'inline' }} top='-7px' pos={'relative'}>
              {result.input}
            </Text>
            <Box>
              <Response text={result.response} />
            </Box>
            <Text mt={'5px'} overflow={'auto'} display='inline-block'>
              <Text as='span' color='red.400'>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </Text>
              &nbsp;
              <Blue text='~' />
            </Text>
            &nbsp;
          </span>
        ))}
      </span>

      <span className={styles.blinker}>
        <input
          style={{ width: `${inputSize}px` }}
          className={styles.userInput}
          type='text'
          name='command input'
          autoFocus
          onKeyDownCapture={handleKeyUp}
          onBlur={handleOnBlur}
        />
      </span>
    </Box>
  );
};

export default Input;
