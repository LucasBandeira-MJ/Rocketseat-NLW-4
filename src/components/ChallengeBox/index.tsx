import styles from './styles.module.sass'

export const ChallengeBox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up" />
                    Avance de level completando desafios.
                </p>
            </div>
        </div>
    )
}