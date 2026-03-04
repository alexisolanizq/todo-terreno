import api from "src/services/axios";

const tireService = {
  getAll() {
    return api.get("/tires");
  },
  getBySlug(slug) {
    return api.get(`tires/${slug}`);
  },
};

export default tireService;
