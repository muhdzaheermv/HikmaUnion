import ProshowPageCard from '@/components/Proshow/proshowPageCard'
import styles from '@/styles/ProdezzaPage.module.css'
import Head from 'next/head'

const artists = [ 
  {
    id: 'group-1',
    name: 'Group A',
    date: 'Click to Register',
    img: '/images/group_a.png',
    link: 'https://forms.gle/WxLfgWCu5wcKPE6F9',
    content:
      'Group A Arts registration is open. This registration is for students participating in Group A arts events.',
  },
  {
    id: 'group-2',
    name: 'Group B',
    date: 'Click to Register',
    img: '/images/group_b.png',
    link: 'https://forms.gle/uYjD5KKvAjyoAWzw6',
    content:
      'Group B Arts registration is open. This registration is for students participating in Group B arts events.',
  },
  {
    id: 'group-3',
    name: 'Group C',
    date: 'Click to Register',
    img: '/images/group_c.png',
    link: 'https://forms.gle/gp2Fqcaf1A7StjQ99',
    content:
      'Group C Arts registration is open. This registration is for students participating in Group C arts events.',
  },
  {
    id: 'group-4',
    name: 'Group D',
    date: 'Click to Register',
    img: '/images/group_d.png',
    link: 'https://forms.gle/ea11hHyYTkjxtac28',
    content:
      'Group D Arts registration is open. This registration is for students participating in Group D arts events.',
  },
  {
    id: 'group-4',
    name: 'Group A',
    date: 'Click to Register',
    img: '/images/onstage_a.png',
    link: 'https://forms.gle/YjpsbPhc2QMEwjQbA',
    content:
      'Group A Arts Onstage Registration Open. This registration is intended for students who will be participating in Group A onstage arts events.',
  },
  {
    id: 'group-4',
    name: 'Group B',
    date: 'Click to Register',
    img: '/images/onstage_b.png',
    link: 'https://forms.gle/K7YUp8zc2XXaV6fD8',
    content:
      'Group B Arts Onstage Registration Open. This registration is intended for students who will be participating in Group B onstage arts events.',
  },
  {
    id: 'group-4',
    name: 'Group C',
    date: 'Click to Register',
    img: '/images/onstage_c.png',
    link: 'https://forms.gle/7GYb62GuXsnw8tC6A',
    content:
      'Group C Arts Onstage Registration Open. This registration is intended for students who will be participating in Group C onstage arts events.',
  },
  {
    id: 'group-4',
    name: 'Group D',
    date: 'Click to Register',
    img: '/images/onstage_d.png',
    link: 'https://forms.gle/jif4WJJgh4qifyLa7',
    content:
      'Group D Arts Onstage Registration Open. This registration is intended for students who will be participating in Group D onstage arts events.',
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
