import { useRouter } from 'next/router'
import useLocationSearch from '../../hooks/useLocationSearch'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import TopBar from '../components/TopBar'
const roundNumber = (number) => {
    return Math.round(number * 100) / 100;
}

const ListingEntry = ({ locData }) => {
    return (
        <li key={locData.location.id}>Name: {locData.location.name} ({roundNumber(locData.distance)} miles away)</li>)
}

export default function Listings() {
    const router = useRouter();
    const { zipCode } = router.query;

    const { searchResult, isLoading, isError } = useLocationSearch(zipCode)
    
    if (isError) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const locations = (searchResult.locations || [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Poll2Poll</title>
            </Head>
           <TopBar/>
            <main className={styles.main}>
                <div className={styles.powderblue}>
                    <p className={styles.deepblue}>your closest Polling
                    Station for {zipCode}
            </p>

                    <div className={styles.pollbox}>
                        <p>
                            {locations[0].location.name}
            </p>
                    </div>
                </div>

            </main>

            <main className={[styles.main, styles.frame].join(" ")}>
                <div className={styles.powderwhite}>
                    <p className={styles.deepblue}>Next available polling stations: 
            </p>

                    <div className={styles.pollboxopen}>
                        <p>
                            {locations[0].location.name}
            </p>
                    </div>
                </div>

        
            
                <div className={styles.powdergray}>
                    <p className={styles.deepblue}><p></p>
            </p>

                    <div className={styles.pollboxthird}>
                        <p>
                            {locations[0].location.name}
            </p>
                    </div>
                </div>

            </main>

        </div>
    )

}
