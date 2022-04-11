import styles from './styles.module.sass'

export const Countdown = () => {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <span>2</span>
                    <span>5</span>
                </div>
                <span>:</span>
                <div>
                    <span>0</span>
                    <span>0</span>
                </div>
            </div>
            <button type="button" className={styles.startButton}>
                Iniciar um ciclo
            </button>
        </>

    )
}