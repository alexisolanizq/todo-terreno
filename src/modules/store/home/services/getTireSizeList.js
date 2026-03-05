import api from "src/services/axios";

export const getTireSizesApi = async () => {
  const { data } = await api.get("/tire-sizes");

  return data || [];
};
