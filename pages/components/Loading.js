import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useSWR from 'swr';
import styles from '../../styles/Home.module.css';
import TopBar from './TopBar'; 
export default function Loading (props){
    const address = props.address;
return(


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
                <h3 className={styles.deepblueBorder}>{address}</h3>
            </div>
            <div><h2 className={styles.search}>Searching...</h2></div>
        </div>
    </main>
</div>
)
}
