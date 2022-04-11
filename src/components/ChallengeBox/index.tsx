import { useState } from 'react'
import styles from './styles.module.sass'

export const ChallengeBox = () => {
    const [hasActiveChallenge, setHasActiveChallenge] = useState(true) 

    return (
        <div className={styles.container}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>
                    <main>
                        <img src="icons/body.svg" alt="Body" />
                        <strong>Novo desafio</strong>
                        <p>
                            Levante e faça uma caminhada de 3 minutos.
                        </p>
                    </main>
                    <footer>
                            <button 
                                type="button"
                                className={styles.challengeFailedButton}
                            >
                                Falhei
                            </button>

                            <button 
                                type="button"
                                className={styles.challengeSucceededButton}
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