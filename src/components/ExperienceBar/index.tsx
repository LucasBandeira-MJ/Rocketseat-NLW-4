import { useContext } from 'react'
import { ChallengesContext } from '../../context/ChallengesContext'
import styles from './styles.module.sass'

export const ExperienceBar = () => {
    const { currentExp, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExp * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div className={styles.experienceContainer}>
                <div 
                    className={styles.experienceFill}
                    style={{ width: `${percentToNextLevel}%` }}
                ></div>

                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    { currentExp } xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}