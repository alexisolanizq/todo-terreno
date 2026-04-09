import { useTopSellingFetchQuery } from "../queries/top-selling.query"

const useTopSellings = () => {

    const { data: topSellings, isLoading } = useTopSellingFetchQuery()

    return {
        isLoading,
        topSellings
    }
}

export default useTopSellings