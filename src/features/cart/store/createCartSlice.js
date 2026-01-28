export const createCartSlice = (set, get) => ({
  cart: [],
  total: 0,
  addToCart: (product) => {
    const { cart } = get();
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },
  calculateTotal: () => {
    set((state) => ({
      total: state.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      ),
    }));
  },
  clearCart: () => set({ cart: [], total: 0 }),
});
