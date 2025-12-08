import React from 'react'
import Head from 'next/head'
import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/ProshowPage.module.css'

const artists = [
    {
        name: 'Innovation for Impact: YIP 8.0 Awareness Program',
        date: '21/11/2025',
        day: 'Wednesday',
        img: '/images/eventFive.jpeg',
        id: "jubin",
        content: 'The Department of Computer Application conducted the “Innovation for Impact: YIP 8.0 Awareness Program” to introduce students to the Young Innovators Programme. The session, led by YIP Co-ordinator Nayana P, aimed to inspire innovation, creativity, and problem-solving among learners.'
    },
    {
        name: 'National Bird Observation Day',
        date: '12/11/2025',
        day: 'Wednesday',
        img: '/images/eventThree.jpeg',
        id: "jubin",
        content: 'Aspire College observed National Bird Observation Day to inspire students to watch, identify, and protect bird species. The program highlighted the importance of biodiversity and environmental awareness, encouraging participants to appreciate and conserve nature.'
    },
    {
        name: 'Keralappiravi – Malayalimanka Competition',
        date: '01/11/2025',
        day: 'Wednesday',
        img: '/images/eventTwo.jpeg',
        id: "jubin",
        content: 'In celebration of Keralappiravi, Aspire College conducted the Malayalimanka Competition, organized by the Cultural Club and Second Language Department in association with IQAC. The event showcased Kerala’s heritage, traditional attire, and cultural artistry.'
    },
    {
        name: 'Victory Day',
        date: '27/10/2025',
        day: 'Monday',
        img: '/images/eventOne.jpeg',
        id: "neetimohan",
        content: 'Aspire College Thrithala proudly presents the Hikma Union 2025–26 inauguration with a vibrant Victory Day celebration! Enjoy a powerful live band performance by St. Marys Kozhikode as their energetic rhythms light up the day, marking the start of an exciting new union journey filled with spirit, music, and celebration.'
    }
];



const eventsPage = () => {
 return (
        <>
            <Head>
                <title>Hikma Events</title>
                <meta name="description" content="Ragam 2023 | Proshow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <h2 className={styles.title}>Hikma Union<br />Events</h2>
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

export default eventsPage


