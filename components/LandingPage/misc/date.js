import styles from '@/styles/Misc.module.css'

export default function Date(){
    return(
            <div className={`${styles['date-container']} misc-anim`}>
                <h2 className={styles.date}>Aspire</h2>
                <h2 className={styles.date}>College</h2>
            </div>
    )
}