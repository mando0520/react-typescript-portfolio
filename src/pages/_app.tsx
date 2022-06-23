import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import '../styles/reset.css'
import { theme } from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp