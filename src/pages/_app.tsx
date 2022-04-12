import '../styles/global.sass'
import type { AppProps } from 'next/app'
import { ChallengesProvider } from '../context/ChallengesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
