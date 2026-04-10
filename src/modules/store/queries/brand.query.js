import { getBrandList } from "src/modules/store/services/getBrandList";
import { useFetchQuery } from "src/shared/hooks/useQueries";

export const useBrandQuery = () => {
  return useFetchQuery({
    queryKey: ["brands"],
    queryFn: getBrandList,
  });
};
