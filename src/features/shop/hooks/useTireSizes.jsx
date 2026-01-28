import { useQuery } from "@tanstack/react-query"
import { getTireSizesApi } from "../api/tireSizesApi"

const useTireSizes = () => {
    return useQuery({
        queryKey: ['tire_sizes'],
        queryFn: getTireSizesApi,
        staleTime: Infinity,
        select: (data) => data
    })
}

export default useTireSizes