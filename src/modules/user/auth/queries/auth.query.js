import { useMutationQuery } from "src/shared/hooks/useQueries";
import { authStorage } from "src/utils/localStorage";
import { loginRequest } from "../services/auth.service";

export const useLoginQuery = () => {
  return useMutationQuery({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      authStorage.setToken(data);
    },
  });
};
