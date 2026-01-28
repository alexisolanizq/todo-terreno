import { useQuery } from '@tanstack/react-query'
import { getBrandList } from '../api/brandApi'

const useBrandList = () => {
    return useQuery({
        queryKey: ['brands'],
        queryFn: getBrandList,
        staleTime: Infinity,
        select: (data) => data.data
    })
}

export default useBrandList