import api from "src/services/axios";

export const topSellingService = {
  getAll() {
    return api.get("/get-top-selling");
  },
};
