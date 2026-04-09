import { createCartSlice } from "src/store/createCartSlice";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useStore = create(
  devtools(
    persist(
      (...a) => ({
        ...createCartSlice(...a),
        // ...createAuthSlice(...a),
      }),
      {
        name: "todoterreno-storage",
        partialize: (state) => ({ cart: state.cart }),
      },
    ),
  ),
);
