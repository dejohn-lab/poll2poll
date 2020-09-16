import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import {faSearchPlus}from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poll2Poll</title>
        <title>:</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
    <div className={styles.p2p}>
    <h3>Poll2Poll</h3>
    </div>
      <div className={styles.pollbox}>
        <h1 className={styles.title}>
          Check Poll
        </h1>
        <h1 className={styles.title}>
          Status
        </h1>
    
    
        <p className={styles.description}>
            <label for="name">Enter Zip:</label>
      
<input type="number" id="name" name="name" required
       minLength="5" maxLength="5" size="10"></input>
         
      <div className={styles.fontW}> 
        <Link href="/listings">
          <a><FontAwesomeIcon icon={faSearchPlus} /></a>
        </Link>

        </div></p> 
      </div>
        
        </main> 
        
    </div>
  )
}
