import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/SportsPage.module.css'
import Head from 'next/head'

const artists = [
    {
        name: 'ASPIRO Sports Meet 25 – Day 3 Throwball',
        date: '17 December 2025',
        day: 'Tuesday',
        img: '/images/sports_meetday3.jpeg',
        // id: "dabzee",
        content: 'Day 3 of Aspiro Sports Meet 25 brings high-energy Throwball action! Watch teams battle it out with skill and teamwork on 17 December at 2:00 PM'
    },
    {
        name: 'ASPIRO Sports Meet 25 – Day 2 Volleyball',
        date: '16 December 2025',
        day: 'Tuesday',
        img: '/images/sports_meetday.png',
        // id: "dabzee",
        content: 'Feel the thrill at ASPIRO Sports Meet 25! Day 2 brings an action-packed Volleyball Tournament on 16 Dec, 2:00 PM at Aspire College Court. Elevate the game and honor the spirit of sport!'
    },
    {
        name: 'Volleyball',
        // date: '16 December',
        // day: 'Monday',
        img: '/images/volleyball.jpeg',
        // id: "dabzee",
        content: 'The Hikma College Union’s Aspire Volleyball Team proudly achieved Calicut University C-Zone Volleyball Second Runner-Up. This success reflects the team’s dedication, discipline, and sportsmanship, bringing pride to the college and inspiring future athletes.'
    },
    {
        name: 'Cricket',
        // date: '16 December',
        // day: 'Monday',
        img: '/images/cricket.jpeg',
        // id: "dabzee",
        content: 'The Aspire College Cricket Team is a united group of passionate and disciplined players including Adarsh, Mishab, Yadhu, Uwais, Athul, Shyam, Shafi, Shahdab, Sreedev, Sudhev, Vidhul, Sajad, and Shibin, striving for excellence, teamwork, and sportsmanship on and off the field.'
    },
    {
        name: 'Football',
        // date: '16 December',
        // day: 'Monday',
        img: '/images/football.jpeg',
        id: "dabzee",
        content: 'The Aspire College Football Team features a strong and dedicated squad including Muhammed Ajmal CK, Minhaj, Manzoor, Razik, Fayis, Anzil, Rinshad, Shibili, Anfas, Shefin, Shahil, Sinan, Adithiyan, Fahas, Ajmal CK, Rohit, Asif, Muzammil, Farhan, Rishad, and Nissam, guided by Coach Anjana, united by teamwork, discipline, and passion for the game.'
    },
  

]

export default function Prodezza({ }) {
    return (
        <>
            <Head>
                <title>Hikma Sports</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <h2 className={styles.title}>Hikma<br />Sports</h2>
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