import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/SportsPage.module.css'
import Head from 'next/head'

const artists = [
    {
    id: 'group-1',
    name: 'Group A',
    date: 'Click to Register',
    img: '/images/sport_a.png',
    link: 'https://forms.gle/UUVvEnKydgAmnMdE9',
    content:
      'Group A Sports registration is open. This registration is for students participating in Group A Sports events.',
  },
  
  {
    id: 'group-3',
    name: 'Group B',
    date: 'Click to Register',
    img: '/images/sport_b.png',
    link: 'https://forms.gle/jnJTqbC7x1rHecpq8',
    content:
      'Group B Sports registration is open. This registration is for students participating in Group B Sports events.',
  },
  {
    id: 'group-4',
    name: 'Group C',
    date: 'Click to Register',
    img: '/images/sport_c.png',
    link: 'https://forms.gle/b1fBJ1ADyC8Sqfq88',
    content:
      'Group C Sports registration is open. This registration is for students participating in Group C Sports events.',
  },
  {
    id: 'group-4',
    name: 'Group D',
    date: 'Click to Register',
    img: '/images/sport_d.png',
    link: 'https://forms.gle/2GZiPfs1rigRFAoH6',
    content:
      'Group D Sports registration is open. This registration is for students participating in Group D Sports events.',
  },
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

export default function Prodezza() {
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
          <h2 className={styles.title}>
            Hikma <br /> Arts
          </h2>
        </div>

        <div className={styles['cards-container']}>
          {artists.map((artist, i) => (
            <a
              key={artist.id}
              href={artist.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <ProshowPageCard
                name={artist.name}
                id={artist.id}
                date={artist.date}
                day={artist.day}
                content={artist.content}
                image={artist.img}
                rev={i % 2 !== 0}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}