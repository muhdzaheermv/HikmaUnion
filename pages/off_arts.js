import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/ProdezzaPage.module.css'
import Head from 'next/head'

const artists = [ 
  {
    id: 'group-1',
    name: 'Group A',
    date: 'Click to Register',
    img: '/images/group_a.png',
    link: '',
    content:
      'Group A Arts registration is open. This registration is for students participating in Group A arts events.',
  },
  {
    id: 'group-2',
    name: 'Group B',
    date: 'Click to Register',
    img: '/images/group_b.png',
    link: '',
    content:
      'Group B Arts registration is open. This registration is for students participating in Group B arts events.',
  },
  {
    id: 'group-3',
    name: 'Group C',
    date: 'Click to Register',
    img: '/images/group_c.png',
    link: '',
    content:
      'Group C Arts registration is open. This registration is for students participating in Group C arts events.',
  },
  {
    id: 'group-4',
    name: 'Group D',
    date: 'Click to Register',
    img: '/images/group_d.png',
    link: '',
    content:
      'Group D Arts registration is open. This registration is for students participating in Group D arts events.',
  },
  
]

export default function Prodezza() {
  return (
    <>
      <Head>
        <title>Arts Off stage</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.banner}>
          <h2 className={styles.title}>
            Arts <br /> Off Stage
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
