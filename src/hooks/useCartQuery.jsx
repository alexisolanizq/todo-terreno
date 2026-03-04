import { useQuery } from "@tanstack/react-query"
import { getCart } from "src/features/cart/api/cartApi"

const useCartQuery = () => {
    return useQuery({
        queryKey: ['cart'],
        queryFn: getCart,
        staleTime: 1000 * 60 * 5,
        retry: 2,
    })
}

export default useCartQuery