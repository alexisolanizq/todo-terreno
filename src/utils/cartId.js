export const getCartId = () => {
  try {
    let cartId = localStorage.getItem("cart_id");

    if (!cartId) {
      cartId =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : generateFallbackId();

      localStorage.setItem("cart_id", cartId);
    }

    return cartId;
  } catch (e) {
    console.warn("getCartId error:", e);
    return null;
  }
};

const generateFallbackId = () => {
  return "cart_" + Math.random().toString(36).substring(2) + Date.now();
};
