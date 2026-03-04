import { useQuery } from "@tanstack/react-query"
import { getTireSizesApi } from "src/modules/store/services/getTireSizeList"

const useTireSearchBySize = () => {
    return useQuery({
        queryKey: ['tire_sizes'],
        queryFn: getTireSizesApi,
        staleTime: Infinity,
        select: (data) => data
    })
}

export default useTireSearchBySize