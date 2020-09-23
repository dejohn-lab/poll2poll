import { useRouter } from 'next/router'
import useLocationSearch from '../../hooks/useLocationSearch'

const roundNumber = (number) => {
    return Math.round(number * 100) / 100;
}

const ListingEntry = ({locData}) => {
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
        <div>
            <h1>Listing</h1>
            <ul>
                {locations.map((locData) => <ListingEntry locData={locData} />)}
            </ul>
        </div>
    )
}
