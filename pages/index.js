import Head from 'next/head'
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
        
       <div className={styles.fontW}> <FontAwesomeIcon icon={faSearchPlus} />
        </div></p> 
        </main> 
    </div>
  )
}
