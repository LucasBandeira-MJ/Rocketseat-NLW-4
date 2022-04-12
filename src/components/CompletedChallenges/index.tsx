import { useContext } from 'react'
import { ChallengesContext } from '../../context/ChallengesContext'
import styles from './styles.module.sass'

export const CompletedChallenges = () => {
    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <div className={styles.container}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}