import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useSWR from 'swr';
import styles from '../styles/Home.module.css';
import TopBar from './components/TopBar';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  const { data: states, loading: statesLoading } = useSWR('/api/geo/states', fetcher);
  const address = encodeURIComponent(`${street}, ${city}, ${state} ${zipCode}`);

  useEffect(() => {
    if (submit) {
      router.push(`/listings/${address}`);
    }
  }, [address, city, router, state, street, submit, zipCode]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Poll2Poll</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className={styles.main}>
        <div className={styles.pollbox}>
          <h1 className={styles.title}>
            Check Poll
          </h1>
          <h1 className={styles.title}>
            Status
          </h1>

          <div className={styles.description}>
            <h3>Enter Address Where You Are Registered To Vote</h3>

            <form onSubmit={(e) => { setSubmit(true); e.preventDefault(); }}>
              <p className={styles.fieldSection}>
                <input
                  type="text"
                  id="street"
                  name="street"
                  required
                  className={styles.field}
                  onChange={(e) => setStreet(e.target.value)}
                />
                <label htmlFor="street" className={styles.label}>street</label>
              </p>

              <p className={styles.fieldSection}>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className={styles.field}
                  onChange={(e) => setCity(e.target.value)}
                />
                <label htmlFor="city" className={styles.label}>city</label>
              </p>
              <p className={styles.fieldSection}>
                <input
                  type="text"
                  name="states"
                  list="states"
                  className={styles.field}
                  onChange={(e) => setState(e.target.value)}
                  disabled={statesLoading}
                />
                {states?.length && (
                <datalist id="states">
                  {states.map((item, key) => <option key={key} value={item} />)}
                </datalist>
                )}
                <label htmlFor="states" className={styles.label}>state</label>
              </p>

              <p className={styles.fieldSection}>
                <input
                  type="text"
                  name="zipCode"
                  className={styles.field}
                  onChange={(e) => setZipCode(e.target.value)}
                />
                <label htmlFor="zipCode" className={styles.label}>zip code</label>
              </p>

            </form>

            <div className={styles.floatRight}>
              <Link href={`/listings/${address}`}>
                <button
                  type="submit"
                  className={styles.submit}
                  disabled={
                  zipCode.length === 0
                   || state.length === 0
                   || city.length === 0
                   || street.length === 0
}
                >
                  Submit

                </button>
              </Link>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
