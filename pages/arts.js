import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/ProdezzaPage.module.css'
import Head from 'next/head'
import Link from 'next/link'

const artists = [
    {
        name: 'Group 1',
        date: 'Click to Register',
        // day: '',
        img: '/images/group_1.png',
        // id: "dabzee",
        link: 'https://forms.gle/a8qAFh89Z4BPQEEB7',
        content: 'Group 1 Arts registration is open. This registration is for students participating in Group 1 arts events. The registration period is valid until 13 January 2025.'
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