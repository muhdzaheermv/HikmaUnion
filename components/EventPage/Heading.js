import styles from '@/styles/EventPage.module.css'

const Head = ({name}) => {
  
  return (
      <div  className={styles.headingContainer}>
        <div  className={styles.presents}>Hikma 2026</div>
          <div  className={styles.head}>{name}</div>
      </div>
  )
}

export default Head