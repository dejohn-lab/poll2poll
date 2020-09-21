import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'


export default function Home(props) {
  const [zipCode, setZipCode] = useState('')
  const [submit, setSubmit] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (submit && zipCode.length === 5) {
      router.push(`/listings/${zipCode}`)
    }
  }, [submit, zipCode])

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


          <div className={styles.description}>
            <label htmlFor="zipCode">Enter Zip:</label>

            <form onSubmit={(e) => { setSubmit(true); e.preventDefault() }}>
              <input type="number" id="zipCode" name="zipCode" required
                minLength="5" maxLength="5" size="10" onChange={(e) => setZipCode(e.target.value)}></input>
            </form>

            <div className={styles.fontW}>
              <Link href={`/listings/${zipCode}`}>
                <a><FontAwesomeIcon icon={faSearchPlus} /></a>
              </Link>
            </div>
          </div>
        </div >

      </main >

    </div >
  )
}
