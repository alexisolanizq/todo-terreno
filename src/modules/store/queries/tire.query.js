import { useFetchQuery } from "src/shared/hooks/useQueries";
import tireService from "../services/tire.service";

export const tiresKeys = {
  all: ["tires"],
  lists: (filters) => ["tires", filters],
  detail: (slug) => ["tires", slug],
};

export const useFetchTiresQuery = () => {
  return useFetchQuery({
    queryKey: tiresKeys.all,
    queryFn: async () => {
      const data = await tireService.getAll();
      return data?.data;
    },
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
