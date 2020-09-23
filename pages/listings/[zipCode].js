import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const roundNumber = (number) => {
    return Math.round(number * 100) / 100;
}

function useLocationSearch (zipCode) {
    if (!zipCode) {
        return {
            searchResult: [],
            isLoading: true,
            isError: false,
        }
    }


    const { data, error } = useSWR(`/api/civics/${zipCode}`, fetcher)
    return {
      searchResult: data,
      isLoading: !error && !data,
      isError: error
    }
  }

export default function Listings() {
    const router = useRouter();
    const { zipCode } = router.query;

    const {searchResult, isLoading, isError } = useLocationSearch(zipCode)

    if (isError) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <div>
            <h1>Listing</h1>
            <ul>
                {(searchResult.locations || []).map((locData) => {
                    return (
                        <li key={locData.location.id}>Name: {locData.location.name} ({roundNumber(locData.distance)} miles away)</li>
                    )
                })}
            </ul>
        </div>
    )
}
