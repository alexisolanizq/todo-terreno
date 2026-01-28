import api from "src/lib/axios";

export const getTireSizesApi = async () => {
  const { data } = await api.get("/tire-sizes");

  return data || [];
};
