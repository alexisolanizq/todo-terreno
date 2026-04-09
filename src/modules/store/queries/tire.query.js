import { useFetchQuery } from "src/shared/hooks/useQueries";
import tireService from "../services/tire.service";

export const tiresKeys = {
  all: ["tires"],
  lists: (filters) => ["tires", filters],
  detail: (slug) => ["tires", slug],
};

export const useFetchTiresQuery = (filtersParams) => {
  return useFetchQuery({
    queryKey: ["tires", filtersParams],
    queryFn: () => tireService.getAll(filtersParams),
  });
};

export const useTireDetailQuery = (slug) => {
  return useFetchQuery({
    queryKey: tiresKeys.detail(slug),
    queryFn: async () => {
      const data = await tireService.getBySlug(slug);
      return data?.data;
    },
  });
};
