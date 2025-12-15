import React from 'react'
import Head from 'next/head'
import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/EDPage.module.css'

const artists = [
    {
        name: 'ED Club Organised Industrial Visit to AR Handlooms, Kuthampully',
        date: '08/12/2025',
        day: 'Tuesday',
        img: '/images/ed_club_one.jpeg',
        // id: "jubin",
        content: 'The ED Club successfully organized an industrial visit to AR Handlooms, Kuthampully, today with the active participation of 48 ED Club members. The visit was accompanied by Soumya P, Vice Principal, Unnikrishnan K V, Head of the Department of Commerce and Management Studies, and Mini M P, ED Club Coordinator. As part of the visit, the team at AR Handlooms conducted a detailed awareness class on the handloom industry along with a practical session for the students. The students were also taken to the weaving and printing sections, where they witnessed the complete process of fabric production. The visit provided valuable exposure to traditional entrepreneurship, craftsmanship, and the working of small-scale industries. The programme was highly informative and beneficial for all the participants.'
    },
    {
        name: 'Cloth Bag Handover by ED Club Students',
        date: '25/10/2025',
        day: 'Saturday',
        img: '/images/ed_club_two.jpeg',
        // id: "jubin",
        content: 'The Entrepreneurship Development (ED) Club conducted a brief ceremony on 25th October 2025 to hand over cloth bags prepared by the club members to the Principal Dr. Muhammed Fasil KP. The event was held at the college premises in the presence of Vice Principal Soumya, IQAC Coordinator Savithri , and NSS P O Mubaris and Asst. professor Rajesh.The ED Club Coordinator welcomed the gathering and highlighted the need for eco-friendly practices. Mr. Subair ( PRO) appreciated the students’ efforts in promoting sustainability through the preparation of cloth bags.'
    },
    {
        name: 'Meet the Entrepreneur: National Entrepreneurship Day Celebration 2025',
        date: '21/08/2025',
        day: 'Thursday',
        img: '/images/ed_club_three.jpeg',
        // id: "jubin",
        content: 'The ED Club, in association with IQAC, organized the National Entrepreneurship Day Celebration on 21st August 2025 at 11:00 AM in the Seminar Hall. The programme, titled “Meet the Entrepreneur,” began with a Welcome Speech by Ms. Mini M.P., ED Club Coordinator. Our Principal, Dr. Muhammed Fasil K.P., delivered the Presidential Address and spoke about the importance of entrepreneurship in today’s world.The session was moderated by Mr. Subair V.M., PRO, who ensured the smooth conduct of the programme. The Chief Guest, Mr. Basheer K.V., shared his entrepreneurial journey and inspired students to develop innovative ideas. Mrs. Savithri, IQAC Coordinator, shared a review of the session, appreciating its interactive nature and encouraging student involvement. The students actively participated by asking questions, which made the programme more lively and meaningful. The event concluded with a Vote of Thanks by Mr. Anas T.K. on behalf of the ED Club. The programme was inspiring, Successful and Well-received.'
    }
];



const eventsPage = () => {
 return (
        <>
            <Head>
                <title>Hikma ED</title>
                <meta name="description" content="Ragam 2023 | Proshow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <h2 className={styles.title}>Hikma<br />ED Club</h2>
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


