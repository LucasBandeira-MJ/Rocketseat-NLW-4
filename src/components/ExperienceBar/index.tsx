import styles from './styles.module.sass'

export const ExperienceBar = () => {
    return (
        <header className={styles.experienceBar}>
            <span>8 xp</span>
            <div className={styles.experienceContainer}>
                <div 
                    className={styles.experienceFill}
                    style={{ width: '50%' }}
                ></div>

                <span className={styles.currentExperience} style={{ left: '50%' }}>
                    300 xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    )
}