import { useCheckoutQuery } from "../queries/payment.query"

const useCheckoutPayment = () => {

    const mutation = useCheckoutQuery()

    const handleCheckout = async () => {
        const data = await mutation.mutateAsync()
        console.log(data);
        
        window.location.href = data.init_point
    }

    return {
        handleCheckout,
        isLoading: mutation.isPending,
    }
}

export default useCheckoutPayment