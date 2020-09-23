
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
    
      </Head>
      <div className={styles.p2p}>
      <h3>: Poll2Poll</h3>
      </div>
      <main className={styles.main}>
    <div className={styles.powderblue}>
    <h1 className={styles.deepblue}>your closest Polling</h1> 
        <h1 className={styles.deepblue}>Station for _ _ _ _ _
        </h1>
        </div>
      <div className={styles.pollbox}>
        <h1>
          ADDRESS HERE
        </h1>
       
      </div>
        
        </main> 
        
    </div>
  )
}

