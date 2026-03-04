import api from "src/services/axios";

export const getCart = async () => {
  const { data } = await api.get("/cart");
  return data;
};
