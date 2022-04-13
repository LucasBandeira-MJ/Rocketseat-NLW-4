import '../styles/global.sass'
import type { AppProps } from 'next/app'
import { ChallengesProvider } from '../context/ChallengesContext'
import { CountdownProvider } from '../context/CountdownContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider>
  )
}

export default MyApp
