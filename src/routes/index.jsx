import { createBrowserRouter } from "react-router-dom";
import AdminGeneral from "src/components/layout/AdminGeneral";
import General from "src/components/layout/General";
import CatalogPage from "src/pages/public/CatalogPage";
import HomePage from "src/pages/public/HomePage";

const router = createBrowserRouter([
    {
        path: '',
        element: <General />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/catalogo',
                element: <CatalogPage />,
            },
        ]
    },
    {
        path: '/admin',
        element: <AdminGeneral />,
        children: [

        ]
    }
]);

export default router;