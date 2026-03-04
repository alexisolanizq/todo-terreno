import { useQuery } from '@tanstack/react-query'
import { getBrandList } from 'src/modules/store/services/getBrandList'

const useBrandList = () => {
    return useQuery({
        queryKey: ['brands'],
        queryFn: getBrandList,
        staleTime: Infinity,
        select: (data) => data.data
    })
}

export default useBrandList