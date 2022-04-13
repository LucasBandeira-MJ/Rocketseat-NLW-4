import { useContext, useState } from 'react'
import { ChallengesContext } from '../../context/ChallengesContext'
import { CountdownContext } from '../../context/CountdownContext'
import styles from './styles.module.sass'

export const ChallengeBox = () => {
    const { 
        activeChallenge, 
        resetChallenge, 
        completeChallenge 
    } = useContext(ChallengesContext)

    const { startCountdown, resetCountdown } = useContext(CountdownContext)

    const handleChallengeSucceeded = () => {
        completeChallenge()
        resetCountdown()
    }

    const handleChallengeFailed = () => {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.container}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
                        <strong>Novo desafio</strong>
                        <p>
                            {activeChallenge.description}
                        </p>
                    </main>
                    <footer>
                            <button 
                                type="button"
                                className={styles.challengeFailedButton}
                                onClick={handleChallengeFailed}
                            >
                                Falhei
                            </button>

                            <button 
                                type="button"
                                className={styles.challengeSucceededButton}
                                onClick={handleChallengeSucceeded}
                            >
                                Completei
                            </button>
                        </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up" />
                    Avance de level completando desafios.
                </p>
            </div>
            )
            }
        </div>
    )
}