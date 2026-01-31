import { useQuery } from '@tanstack/react-query'
import { getBrandList } from 'src/features/catalog/api/getBrandList'

const useBrandList = () => {
    return useQuery({
        queryKey: ['brands'],
        queryFn: getBrandList,
        staleTime: Infinity,
        select: (data) => data.data
    })
}

export default useBrandList