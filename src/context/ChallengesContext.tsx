import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

interface ChallengesContextData {
    level: number
    currentExp: number
    levelUp: () => void
    challengesCompleted: number
    startNewChallenge: () => void
    activeChallenge: null | ActiveChallengeState
}

interface ChallengesProviderProps {
    children: ReactNode
}

interface ActiveChallengeState {
    type: string
    description: string
    amount: number
}

export const ChallengesContext = createContext({} as ChallengesContextData)


export const ChallengesProvider = ({children}: ChallengesProviderProps) => {
    const [level, setLevel] = useState(1)
    const [currentExp, setCurrentExp] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState<null|ActiveChallengeState>(null)

    const levelUp = () => {
        setLevel(level => level + 1)
    }

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
    }

    return (
        <ChallengesContext.Provider value={
            {
                level, 
                levelUp, 
                currentExp, 
                challengesCompleted, 
                startNewChallenge,
                activeChallenge
            }
        }>
            {children}
        </ChallengesContext.Provider>
    )
}