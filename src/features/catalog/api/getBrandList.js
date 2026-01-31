import api from "src/lib/axios";

export const getBrandList = async () => {
  const { data } = await api.get("brands");
  return data;
};
