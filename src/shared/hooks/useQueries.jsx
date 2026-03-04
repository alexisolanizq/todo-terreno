import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"


export const useFetchQuery = ({
    queryKey,
    queryFn,
    enabled = true,
    options = {}
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
            invalidateKeys.forEach(key => {
                queryClient.invalidateQueries(key)
            })
            if (onSuccess) {
                onSuccess(data, variables, context)
            }

        },
        ...options
    })
}