import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useLocationSearch(zipCode) {
  if (!zipCode) {
    return {
      searchResult: [],
      isLoading: true,
      isError: false,
    };
  }

  const { data, error } = useSWR(`/api/civics/${zipCode}`, fetcher);
  return {
    searchResult: data,
    isLoading: !error && !data,
    isError: error,
  };
}
