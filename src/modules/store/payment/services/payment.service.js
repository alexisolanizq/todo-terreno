import api from "src/services/axios";

export const paymentService = {
  createPayment: async () => {
    const { data } = await api.post("/payment/create");
    return data;
  },
};
