import api from "src/services/axios";

export const getTopSelling = async () => {
  const { data } = await api.get("/get-top-selling");

  return data || [];
};
