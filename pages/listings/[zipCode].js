import { useRouter } from 'next/router'
import useLocationSearch from '../../hooks/useLocationSearch'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

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
            <div className={styles.p2p}>
                <h3 className={styles.p2p1}>Poll2Poll <br />: City</h3>
                <div className={[styles.fontW, styles.p2p2].join(" ")}>
                    <Link href="/">
                        <a><FontAwesomeIcon icon={faHome} /></a>
                    </Link>

                </div>
            </div>
            <main className={styles.main}>
                <div className={styles.powderblue}>
                    <p className={styles.deepblue}>your closest Polling
                    Station for {zipCode}
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
