import axios from "axios";
import { getCartId } from "src/utils/cartId";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://todo-terreno-backend-api-6lhern-07838a-147-93-114-242.traefik.me/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const cartId = getCartId();
    if (cartId) {
      config.headers["X-Cart-Id"] = cartId;
    }
  } catch (e) {
    console.warn("Interceptor error:", e);
  }
  return config;
});

export default api;
