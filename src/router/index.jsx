import { createBrowserRouter } from "react-router-dom";
import AdminRoutes from "src/modules/admin/AdminRoutes";
import StoreRoutes from "src/modules/store/StoreRoutes";
import StoreLayout from "src/layouts/store/StoreLayout";

const router = createBrowserRouter([
    {
        path: '',
        element: <StoreLayout />,
        children: StoreRoutes
    },
    AdminRoutes
]);

export default router;