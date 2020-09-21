import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

const zipCodeSearch = async (zipcode) => {
    const res = await fetch(`/api/civics/${zipcode}`)
    return res.json();
}

const roundNumber = (number) => {
    return Math.round(number * 100) / 100;
}

export default function Listings() {
    const router = useRouter();
    const { zipCode } = router.query;
    const [searchResult, setSearchResult] = useState({});

    useEffect(() => {
        async function loadData() {
            const data = await zipCodeSearch(zipCode);
            setSearchResult(data);
        }

        if (zipCode && zipCode.length) {
            loadData();
        }
    }, [zipCode])

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