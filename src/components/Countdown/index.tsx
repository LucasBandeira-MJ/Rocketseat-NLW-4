import { useEffect, useState } from 'react'
import styles from './styles.module.sass'

const INITIAL_TIME = 6 //25 minutes
let countdownTimeout: NodeJS.Timeout

export const Countdown = () => {
    const [time, setTime] = useState(INITIAL_TIME)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

    useEffect(() => {
        if(isActive && time > 0 ) {
            countdownTimeout = setTimeout(() => {
                setTime(time => time - 1)
            }, 1000)
        } else if(isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
        }

    }, [isActive, time])

    const handleCountdown = () => {
        if(isActive) {
            setTime(INITIAL_TIME)
        }
        
        setIsActive(active => !active)
        clearTimeout(countdownTimeout)
    }

    return (
        <>
            <div className={styles.container}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            <button 
                onClick={handleCountdown} 
                type="button" 
                className={`${styles.startButton} ${isActive && styles.startButtonActive } ${hasFinished && styles.startButtonFinished}`}
                disabled={hasFinished}
            >
                { hasFinished? 'Ciclo encerrado' : isActive ? 'Abandonar Ciclo' : 'Iniciar novo ciclo' }
            </button>
        </>

    )
}