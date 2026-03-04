import { useFetchQuery } from "src/shared/hooks/useQueries";
import { adminServices } from "../services/admin.service";

export const adminKeys = {
  all: ["admin"],
  sidebarMenu: ["sidebar"],
};

export const useFetchAdminSidebar = () => {
  return useFetchQuery({
    queryKey: adminKeys.sidebarMenu,
    queryFn: async () => {
      const data = await adminServices.fetchSidebar();
      return data.data;
    },
  });
};
