import api from "src/lib/axios";

export const getCart = async () => {
  const { data } = await api.get("/cart");
  return data;
};
