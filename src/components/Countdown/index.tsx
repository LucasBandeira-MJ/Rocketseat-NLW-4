import { useEffect, useState } from 'react'
import styles from './styles.module.sass'

const INITIAL_TIME = 10 //25 minutes

export const Countdown = () => {
    const [time, setTime] = useState(INITIAL_TIME)
    const [active, setActive] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

    useEffect(() => {
        if(!active || time <= 0 ) { return ; }
            
        setTimeout(() => {
            setTime(time => time - 1)
        }, 1000)

    }, [active, time])

    const startCountdown = () => {
        setActive(true)
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
                onClick={startCountdown} 
                type="button" 
                className={styles.startButton}
            >
                Iniciar um ciclo
            </button>
        </>

    )
}