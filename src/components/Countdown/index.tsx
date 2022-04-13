import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../../context/ChallengesContext'
import { CountdownContext } from '../../context/CountdownContext'
import styles from './styles.module.sass'


export const Countdown = () => {
    const {minutes, seconds, handleCountdown, isActive, hasFinished} = useContext(CountdownContext)

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')


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