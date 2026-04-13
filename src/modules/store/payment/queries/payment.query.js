import { useMutationQuery } from "src/shared/hooks/useQueries";
import { paymentService } from "../services/payment.service";

export const useCheckoutQuery = () => {
  return useMutationQuery({
    mutationFn: paymentService.createPayment,
  });
};
