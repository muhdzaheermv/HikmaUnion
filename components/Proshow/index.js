import styles from '@/styles/Proshow.module.css'
import Image from 'next/image'
import ProshowCard from './proshowCard'

const artists = [
    {
        name: 'SPORTS DAY 3',
        date: 'Nov',    
        img: 'images/throwball.PNG',
        // div_id: 'jubin',
        link: '/sports'
    },
    {
        name: 'SPORTS DAY 2',
        date: 'Oct',
         img: 'images/volleyball.PNG',
        // div_id: 'neetimohan',
        link: '/sports'
    },
    {
        name: 'Coming soon',
        date: 'Jan',
        img: 'images/hikma_arts.png',
        // div_id: 'amittrivedi',
        link: '/arts'
    }
]

function Proshow(){
    return(
        <div className={`${styles.container} proshow-section` }>
            <div className={styles.marquee}>
                <ul className={styles['marquee-content']}>
                    <li className={styles.stroke}>Hikma</li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        width={100}
                        height={100}
                        alt={'Proshow'}
                        />
                    </li>
                    <li ><b>ഹിക്മ</b></li>
                    <li >Hikma</li>
                </ul>

                <ul className={`${styles['marquee-content']} marquee-proshow`} aria-hidden="true">
                    <li className={styles.stroke}>Hikma</li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        width={100}
                        alt={'Proshow'}
                        height={100}
                        />
                    </li>
                    <li>ഹിക്മ</li>
                    <li>Hikma</li>
                </ul>
            </div>
            <div className={styles.marquee}>
                <ul className={styles['marquee-content']}>
                    <li>Serdaala</li>
                    <li className={styles.stroke}>Serdaala</li>
                    <li><Image 
                        src={'/images/assets/union2.svg'}
                        alt={'Proshow'}
                        width={100}
                        height={100}
                        />
                    </li>
                    <li className={styles.stroke}><b>സെർദാല</b></li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        width={100}
                        alt={'Proshow'}
                        height={100}
                        />
                    </li>
                </ul>

                <ul className={styles['marquee-content']} aria-hidden="true">
                    <li>Serdaala</li>
                    <li className={styles.stroke}>Serdaala</li>
                    <li><Image 
                        src={'/images/assets/union2.svg'}
                        alt={'Proshow'}
                        width={100}
                        height={100}
                        />
                    </li>
                    <li className={styles.stroke}><b>സെർദാല</b></li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        alt={'Proshow'}
                        width={100}
                        height={100}
                        />
                    </li>
                </ul>
            </div>

            <div className={styles.marquee}>
                <ul className={styles['marquee-content']}>
                    <li >First Years</li>
                    <li className={styles.stroke}>First Years</li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        width={100}
                        alt={'Proshow'}
                        height={100}
                        />
                    </li>
                    <li ><b>ഫസ്റ്റ് ഇയേഴ്സ്</b></li>
                </ul>

                <ul className={styles['marquee-content']} aria-hidden="true">
                    <li>First Years</li>
                    <li className={styles.stroke}>First Years</li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        width={100}
                        alt={'Proshow'}
                        height={100}
                        />
                    </li>
                    <li ><b>ഫസ്റ്റ് ഇയേഴ്സ്</b></li>
                </ul>
            </div>
            
            <div className={styles['cards-container']}>
                <div className={styles['web-cards']}>
                    {artists.map((artist,key)=> {
                        return(
                            <ProshowCard title={artist.name} key={key} id={artist.div_id} link={artist.link} date={artist.date} bg={artist.img} />
                        )
                })}
                </div>
                <div className={styles['mob-card']}>
                    <ProshowCard title={artists[1].name} date={artists[1].date} link={artists[1].link} id={artists[1].div_id} bg={artists[1].img} />
                </div>
                {/* <ProshowCard />
                <ProshowCard title={"Ankit"}/>
                <ProshowCard /> */}
            </div>
        </div>
    )
}

export default Proshow