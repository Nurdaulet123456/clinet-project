import type { AppProps } from 'next/app'

// Only Css 
import '../styles/styles.sass'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
