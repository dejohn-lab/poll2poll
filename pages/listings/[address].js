import React from 'react';

import { useRouter } from 'next/router';
import Head from 'next/head';
import useLocationSearch from '../../hooks/useLocationSearch';
import styles from '../../styles/Home.module.css';
import TopBar from '../components/TopBar';

const roundNumber = (number) => Math.round(number * 10) / 10;

const Location = ({ location, distance }) => (
  <>
    <p>{location.name || location.address?.locationName}</p>
    <p>
      {roundNumber(distance)}
      {' '}
      miles away
    </p>
  </>

);

export default function Listings() {
  const router = useRouter();
  const { address } = router.query;

  const { searchResult, isLoading, isError } = useLocationSearch(address);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const locations = (searchResult.locations || []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Poll2Poll</title>
      </Head>
      <TopBar />
      <main className={styles.main}>
        <div className={styles.powderblue}>
          <p className={styles.deepblue}>
            Your closest Polling
            Station for:
            {' '}
            {address}
          </p>

          <div className={styles.pollbox}>
            <p>
              {locations.length > 0 ? (
                <Location distance={locations[0].distance} location={locations[0].location} />

              ) : (
                'No locations found'
              )}
            </p>
          </div>
        </div>

      </main>

      {
        locations.length === 3 ? (

          <main className={[styles.main, styles.frame].join(' ')}>
            <div className={styles.powderwhite}>
              <p className={styles.deepblue}>
                Next available polling stations:
              </p>

              <div className={styles.pollboxopen}>
                <p>
                  {locations[1].location.name}
                </p>
              </div>
            </div>

            <div className={styles.powdergray}>
              <p className={styles.deepblue}>
                <p />
              </p>

              <div className={styles.pollboxthird}>
                <p>
                  {locations[2].location.name}
                </p>
              </div>
            </div>

          </main>
        ) : null
      }

    </div>
  );
}
