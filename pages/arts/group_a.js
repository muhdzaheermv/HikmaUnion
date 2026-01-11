import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/ProdezzaPage.module.css'
import Head from 'next/head'
import Link from 'next/link'

const artists = [
    {
        name: 'Arts Registration',
        date: 'Click to Register',
        // day: '',
        img: '/images/hikma_arts.png',
        // id: "dabzee",
        link: 'https://forms.gle/a8qAFh89Z4BPQEEB7',
        content: 'Aspire College Hikma Union proudly presents Arts January 2026, a vibrant celebration of talent, culture, and creativity.Register now to take part in inspiring performances, exciting competitions, and unforgettable artistic moments.'
    },
    {
        name: 'Participants List',
        date: 'Click to Register',
        // day: '',
        img: '/images/hikma_arts.png',
        // id: "dabzee",
        link: 'https://forms.gle/a8qAFh89Z4BPQEEB7',
        content: 'Aspire College Hikma Union proudly presents Arts January 2026, a vibrant celebration of talent, culture, and creativity.Register now to take part in inspiring performances, exciting competitions, and unforgettable artistic moments.'
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
                                <a key={artist.id} href={artist.link} target="_blank" style={{ textDecoration: 'none' }}> 

                                <ProshowPageCard name={artist.name} id={artist.id} key={i} date={artist.date} day={artist.day} content={artist.content} image={artist.img} rev={i % 2 != 0 ? true : false} />
                    </a>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}