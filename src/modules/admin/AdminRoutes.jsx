import AdminLayout from "src/layouts/admin/AdminLayout";
import Dashboard from "src/modules/admin/dashboard/pages/Dashboard";
import TireBulkUpload from "src/modules/admin/tires/pages/TireBulkUpload";
import TireList from "src/modules/admin/tires/TireList";


const AdminRoutes = {
    path: '/admin',
    element: <AdminLayout />,
    children: [
        {
            path: '',
            element: <Dashboard />
        },
        {
            path: 'tires',
            children: [
                {
                    path: 'list',
                    element: <TireList />,
                },
                {
                    path: 'import',
                    element: <TireBulkUpload />
                },

            ]
        }
    ]
}

export default AdminRoutes