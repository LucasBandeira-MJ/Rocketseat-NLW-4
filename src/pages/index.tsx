import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'

import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengesProvider } from '../context/ChallengesContext'
import { CountdownProvider } from '../context/CountdownContext'

import styles from '../styles/Home.module.sass'

interface HomeProps {
  level: number
  currentExp: number
  challengesCompleted: number
}

const Home = ({ level, currentExp, challengesCompleted }: HomeProps) => {

  return (
    <ChallengesProvider level={level} currentExp={currentExp} challengesCompleted={challengesCompleted}>
      <div className={styles.container}>
          <Head>
            <title>Home | move.it</title>
          </Head>
        <ExperienceBar />
        <CountdownProvider>
          <main>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </main>
        </CountdownProvider>
      </div>
    </ChallengesProvider>

  )
}

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const { level, currentExp, challengesCompleted } = req.cookies


  return {
    props: { 
      level: Number(level), 
      currentExp: Number(currentExp), 
      challengesCompleted: Number(challengesCompleted) 
    }
  }
}

export default Home
