import { create } from "zustand";
import { getTireList, importTires } from "../services/tire-service";

export const useTireStore = create((set, get) => ({
  tires: [],
  isLoading: false,

  fetchTires: async () => {
    set({ isLoading: true });
    try {
      const fetchList = await getTireList();
      const list = get().tires;
      set({ tires: [fetchList, list], isLoading: false });

      return fetchList;
    } catch (error) {
      set({ isLoading: false });
      return error;
    }
  },

  importTires: async (formData) => {
    set({ isLoading: true });
    try {
      const data = await importTires({data: formData});
      set({ tires: data });
    } catch (error) {
      set({ isLoading: false });
      return error;
    }
  },
}));
