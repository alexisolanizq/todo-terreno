import { createBrowserRouter } from "react-router-dom";
import General from "src/components/layout/General";
import Catalog from "src/views/catalog/Catalog";
import Home from "src/views/Home";

const router = createBrowserRouter([
    {
        path: '',
        element: <General />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/catalogo',
                element: <Catalog />,
            },
        ]
    },
]);

export default router;