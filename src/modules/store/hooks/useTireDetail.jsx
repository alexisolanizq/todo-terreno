import { useParams } from "react-router-dom"
import { useTireDetailQuery } from "../queries/tire.query"
import { useCallback, useState } from "react";
import { useAddToCartQuery, useUpdateCartItemQuery } from "../cart/queries/cart.query";

const useTireDetail = () => {

  const { slug } = useParams()

  const { data: { tire, related } = {}, isLoading, } = useTireDetailQuery(slug)

  const updateQuantity = useUpdateCartItemQuery()
  const addItemWithQty = useAddToCartQuery()

  const [quantity, setQuantity] = useState(1)

  const handleChange = (newQty) => {
    setQuantity(newQty);
  };

  const handleAddToCart = () => {
    if (!tire?.id) return

    addItemWithQty.mutateAsync({
      itemId: tire?.id,
      quantity
    })
  }

  return {
    quantity,
    isLoading,
    tire: tire,
    handleChange,
    handleAddToCart,
    related: related,
    isLoadingChangeQty: updateQuantity.isPending
  }
}

export default useTireDetail