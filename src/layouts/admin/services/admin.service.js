import api from "src/services/axios"

export const adminServices = {
    fetchSidebar() {
        return api.get('admin-sidebar')
    }
}