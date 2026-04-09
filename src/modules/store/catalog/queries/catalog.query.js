import { useFetchQuery } from "src/shared/hooks/useQueries";
import tireService from "../../services/tire.service";
import catalogService from "../services/catalog.service";

export const useTireCatalogQuery = (filters) => {
  return useFetchQuery({
    queryKey: ["catalog", filters],
    queryFn: () => tireService.getAll(filters),
    keepPreviousData: true,
  });
};

export const useCatalogTireSizesQuery = () => {
  return useFetchQuery({
    queryKey: ["tire_sizes"],
    queryFn: () => catalogService.getTireSizes(),
  });
};
