import api from "src/services/axios";

const adminTireService = {
  tireList() {
    return api.get("tires");
  },
  create(body) {
    return api.post("tires", body);
  },
};

export default adminTireService;
