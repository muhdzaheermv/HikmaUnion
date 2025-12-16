import styles from '@/styles/Rajan.module.css'
import Image from 'next/image'

export default function Rajan(){
    return(
        <div className={`${styles['main-container']} main-container`}>
            <div className={`${styles['container']} rajan-anim`}>
                <div className={styles.title}>
                    <h6>
                        Aspire College <br></br>&nbsp;
                        {/* <span className={styles.burn}>A</span>
                        <span className={styles.fire}>S</span>
                        <span className={styles.burn}>P</span>
                        <span className={styles.fire}>I</span>
                        <span className={styles.burn}>R</span>
                        <span className={styles.burn}>E</span> */}
                    &nbsp;Empowerment through <span className={styles.text2}>Knowledge</span>
                    </h6>
                    <a href="https://heyzine.com/flip-book/0708570154.html" target="_blank" className={styles.link} rel="noreferrer noopener">
                        See Mithra Union Magazine 2025
                        {/* <span> */}
                        <svg viewBox="0 0 92 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M87.332 5L5.33203 12M87.332 5L81.332 77M87.332 5L3.33203 85" stroke="#ebe6d080" stroke-width="8"/>
                        </svg>
                        {/* </span> */}
                    </a>
                </div>
                <div className={`${styles['img-container']} img-container`}>
                    <Image
                        src={'/images/Aspire.png'}
                        width={950}
                        height={700}
                        className={styles.img}
                    />
                </div>
            </div>
        </div>
    )
}

