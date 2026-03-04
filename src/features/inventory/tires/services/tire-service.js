import api from "src/services/axios";

export const getTireList = async () => {
  const response = await api.get("/tires");
  return response.data;
};
export const importTires = async ({ data }) => {
  console.log(data);

  const response = await api.post("/tires/import", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
