import { AppProps } from 'next/app'
// import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/globals.css'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/600.css'
import '@fontsource/raleway/700.css'

function MyApp ({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
		// <SessionProvider session={session}>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		// </SessionProvider>
  )
}

export default MyApp
