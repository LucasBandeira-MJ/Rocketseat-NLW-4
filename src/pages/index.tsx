import type { NextPage } from 'next'
import Head from 'next/head'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'

import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | mode.it</title>
      </Head>
    <ExperienceBar />
    <main>
      <div>
        <Profile />
        <CompletedChallenges />
        <Countdown />
      </div>
      <div>
      </div>
    </main>
  </div>
  )
}

export default Home
