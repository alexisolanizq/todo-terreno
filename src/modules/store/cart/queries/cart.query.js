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
  });
};

export const useUpdateCartItemQuery = () => {
  return useMutationQuery({
    mutationFn: cartService.updateItem,
    invalidateKeys: ["cart"],
  });
};

export const useRemoveCartItemQuery = () => {
  return useMutationQuery({
    mutationFn: (itemId) => cartService.removeItem(itemId),
    invalidateKeys: ["cart"],
  });
};

export const useClearCartQuery = () => {
  return useMutationQuery({
    mutationFn: cartService.clearCart(),
    invalidateKeys: ["cart"],
  });
};
