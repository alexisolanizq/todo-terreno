import React from 'react'
import { useCartQuery, useRemoveCartItemQuery } from '../queries/cart.query'

const useCart = () => {

  const { data: cart, isLoading } = useCartQuery()
  const removeItemMutation = useRemoveCartItemQuery()

  const onDeleteItem = async (id) => {
    await removeItemMutation.mutate(id)
  }

  return {
    cart,
    isLoading,
    onDeleteItem,
  }
}

export default useCart