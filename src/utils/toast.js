// utils/toast.js
import { toast } from "react-toastify";

export const showSuccess = (message) => {
  toast.success(message);
};

export const showError = (error) => {
  const message =
    error?.response?.data?.message || error?.message || "Error inesperado";

  toast.error(message);
};

export const showInfo = (message) => {
  toast.info(message);
};
