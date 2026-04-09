import api from "src/services/axios";

const catalogService = {
  getTireSizes: async () => {
    const { data } = await api.get("/tire-sizes");
    return data;
  },
};

export default catalogService;
