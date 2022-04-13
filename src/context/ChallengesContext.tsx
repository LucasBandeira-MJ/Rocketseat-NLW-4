import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

interface ChallengesContextData {
    level: number
    currentExp: number
    challengesCompleted: number
    activeChallenge: null | ActiveChallengeState
    experienceToNextLevel: number
    levelUp: () => void
    startNewChallenge: () => void
    resetChallenge: () => void
    completeChallenge: () => void
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
    const [currentExp, setCurrentExp] = useState(30)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState<null|ActiveChallengeState>(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4 , 2)

    const levelUp = () => {
        setLevel(level => level + 1)
    }

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
    }

    const resetChallenge = () => {
        setActiveChallenge(null)
    }

    const completeChallenge = () => {
        if(!activeChallenge) { return }

        const { amount } = activeChallenge
        let finalExperience = currentExp + amount

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExp(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(completed => completed + 1)
    }



    return (
        <ChallengesContext.Provider value={
            {
                level, 
                levelUp, 
                currentExp, 
                challengesCompleted, 
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                completeChallenge
            }
        }>
            {children}
        </ChallengesContext.Provider>
    )
}