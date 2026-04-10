import api from "src/services/axios";

const catalogService = {
  getTireSizes: async () => {
    const { data } = await api.get("/tire-sizes");
    return data;
  },
  getBrands: async () => {
    const { data } = await api.get("/brands");
    return data;
  },
};

export default catalogService;
