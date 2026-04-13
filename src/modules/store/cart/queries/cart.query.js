import { cartService } from "../services/cart.service";
import { useFetchQuery, useMutationQuery } from "src/shared/hooks/useQueries";

export const useCartQuery = () => {
  return useFetchQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const data = await cartService.getCart();
      return data;
    },
  });
};

export const useAddToCartQuery = () => {
  return useMutationQuery({
    mutationFn: cartService.addItem,
    invalidateKeys: ["cart"],
    successMessage: "Producto agregado al carrito",
    // successMessage: (data) => {
    //   console.log(data);
    // },
  });
};

export const useUpdateCartItemQuery = () => {
  return useMutationQuery({
    mutationFn: cartService.updateItem,
    invalidateKeys: ["cart"],
    successMessage: "Carrito actualizado",
  });
};

export const useRemoveCartItemQuery = () => {
  return useMutationQuery({
    mutationFn: (itemId) => cartService.removeItem(itemId),
    invalidateKeys: ["cart"],
    successMessage: "Producto eliminado",
  });
};

export const useClearCartQuery = () => {
  return useMutationQuery({
    mutationFn: cartService.clearCart,
    invalidateKeys: ["cart"],
    successMessage: "Carrito vaciado",
  });
};
