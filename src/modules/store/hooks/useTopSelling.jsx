import { useQuery } from "@tanstack/react-query"
import { getTopSelling } from "../../../modules/store/services/getTopSelling"

const useTopSelling = () => {

    return useQuery({
        queryKey: ['topSelling'],
        queryFn: getTopSelling,
        staleTime: Infinity
    })
}

export default useTopSelling