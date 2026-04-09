import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useFetchQuery = ({
    queryKey,
    queryFn,
    enabled = true,
    options = {
        retry: 1,
        refetchOnWindowFocus: false
    }
}) => useQuery({
    enabled,
    queryKey,
    queryFn,
    staleTime: 1000 * 60 * 5,
    ...options
})

export const useMutationQuery = ({
    mutationFn,
    invalidateKeys = [],
    onSuccess,
    onError,
    options = {}
}) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn,
        onSuccess: (data, variables, context) => {
            console.log("Invalidando:", invalidateKeys)
            invalidateKeys.forEach(key => {
                queryClient.invalidateQueries({
                    queryKey: Array.isArray(key) ? key : [key]
                })
            })
            if (onSuccess) {
                onSuccess(data, variables, context)
            }
        },
        onError,
        ...options
    })
}