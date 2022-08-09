import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import '@/styles/globals.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import theme from 'utils/theme'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp