import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/ProdezzaPage.module.css'
import Head from 'next/head'

const artists = [
    {
        name: 'Hikma Arts',
        date: 'January 2026',
        // day: '',
        img: '/images/hikma_arts.png',
        id: "dabzee",
        content: 'Aspire College Hikma Union proudly presents Arts January 2026, a vibrant celebration of talent, culture, and creativity. Join us for inspiring performances, colorful competitions, and unforgettable moments that bring art to life Fun'
    },
  

]

export default function Prodezza({ }) {
    return (
        <>
            <Head>
                <title>Hikma Arts</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <h2 className={styles.title}>Hikma<br />Arts</h2>
                </div>

                <div className={styles['cards-container']}>
                    {
                        artists.map((artist, i) => {
                            return (
                                <ProshowPageCard name={artist.name} id={artist.id} key={i} date={artist.date} day={artist.day} content={artist.content} image={artist.img} rev={i % 2 != 0 ? true : false} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}