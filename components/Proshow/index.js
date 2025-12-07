import styles from '@/styles/Proshow.module.css'
import Image from 'next/image'
import ProshowCard from './proshowCard'

const artists = [
    {
        name: 'Victory Day',
        date: 'Oct',
        img: 'images/First.jpeg',
        div_id: 'neetimohan'
    },
    {
        name: 'Freshers Day',
        date: 'Nov',
        img: 'images/Second.jpeg',
        div_id: 'jubin'
    },
    {
        name: 'Christmas 2025',
        date: 'Dec',
        img: 'images/Third.jpeg',
        div_id: 'amittrivedi'
    }
]

function Proshow(){
    return(
        <div className={`${styles.container} proshow-section` }>
            <div className={styles.marquee}>
                <ul className={styles['marquee-content']}>
                    <li className={styles.stroke}>Sargodhaya</li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        width={100}
                        height={100}
                        alt={'Proshow'}
                        />
                    </li>
                    <li ><b>സർഗോദയ</b></li>
                    <li >Sargodhaya</li>
                </ul>

                <ul className={`${styles['marquee-content']} marquee-proshow`} aria-hidden="true">
                    <li className={styles.stroke}>Sargodhaya</li>
                    <li><Image 
                        src={'/images/assets/union.svg'}
                        width={100}
                        alt={'Proshow'}
                        height={100}
                        />
                    </li>
                    <li>സർഗോദയ</li>
                    <li>Sargodhaya</li>
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
                            <ProshowCard title={artist.name} key={key} id={artist.div_id} date={artist.date} bg={artist.img} />
                        )
                })}
                </div>
                <div className={styles['mob-card']}>
                    <ProshowCard title={artists[1].name} date={artists[1].date} id={artists[1].div_id} bg={artists[1].img} />
                </div>
                {/* <ProshowCard />
                <ProshowCard title={"Ankit"}/>
                <ProshowCard /> */}
            </div>
        </div>
    )
}

export default Proshow