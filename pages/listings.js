
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poll2Poll</title>
      </Head>
      <div className={styles.p2p}>
        <h3 className={styles.p2p1}>Poll2Poll <br/>: City</h3>
        <div className={[styles.fontW, styles.p2p2].join(" ")}>
              <Link href="/">
                <a><FontAwesomeIcon icon={faHome} /></a>
              </Link>

            </div>
      </div>
      <main className={styles.main}>
        <div className={styles.powderblue}>
          <p className={styles.deepblue}>your closest Polling
         Station for _ _ _ _ _
        </p>
        
        <div className={styles.pollbox}>
          <p>
            ADDRESS HERE
        </p>
        </div>
        </div>

      </main>

    </div>
  )
}

