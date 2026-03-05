import { getTireSizesApi } from "src/modules/store/home/services/getTireSizeList";
import { useFetchQuery } from "src/shared/hooks/useQueries";

export const useTireSearchBySize = () => {
  return useFetchQuery({
    queryKey: ["tire_sizes"],
    queryFn: getTireSizesApi,
    options: {
      staleTime: Infinity,
      select: (data) => data,
    },
  });
};

