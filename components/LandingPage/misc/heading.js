import styles from '@/styles/Misc.module.css'

export default function Heading(){
    return(
        <div className={`${styles['heading-container'] } misc-anim`}>
            <h2 className={styles.heading}>Hikma College Union 2025-26</h2>
        </div>
    )
}