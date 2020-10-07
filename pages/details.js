import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import TopBar from './components/TopBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'



export default function Details() {
    const router = useRouter();
    const { zipCode } = router.query;


    return (
        <div className={styles.container}>
            <Head>
                <title>Poll2Poll</title>
            </Head>
            <TopBar />
            <main className={styles.main}>
                <div className={styles.powderblue}>
                    <p className={styles.deepgreen}>
                        {zipCode}
                    </p>

                    <div className={styles.pollbox}>
                        <p>
                            NEXT ADDRESS
            </p>
                    </div>

                    <main className={[styles.main, styles.frame].join(" ")}>
                        <div className={styles.powderwhite}>
                            <p className={styles.deepgreen}>Bilingual : Espanol
                            Cantonese
            </p>

                            <div className={styles.pollboxBI}>
                                <p className={styles.deepblue}>
                                    Bilingual Poll Workers
                            <p className={styles.changCol}><FontAwesomeIcon icon={faTimes} />
                                    </p>
                                    <p className={styles.deepblue}>
                                        ADA Accessible
                    <p className={styles.changCol2}>    <FontAwesomeIcon icon={faCheck} />
                                        </p>
                                    </p>
                                    <p className={styles.deepblue}>
                                        Provisional Ballot Available
            </p>
                                </p>
                            </div>
                        </div>







                    </main>
                </div>

            </main>
            <main className="styles.ride"></main>

        </div>
    )

}
