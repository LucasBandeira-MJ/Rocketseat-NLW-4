import { useContext } from 'react'
import { ChallengesContext } from '../../context/ChallengesContext'
import styles from './styles.module.sass'

export const Profile = () => {
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/LucasBandeira-MJ.png" alt="Lucas Bandeira" />
            <div>
                <strong>Lucas Bandeira</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}