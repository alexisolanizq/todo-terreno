import React from 'react'
import CatalogPage from 'src/modules/store/catalog/pages/CatalogPage'
import HomePage from 'src/modules/store/home/pages/HomePage'
import TireDetailsPage from './pages/TireDetailsPage'

const StoreRoutes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/catalogo',
        element: <CatalogPage />,
    },
    {
        path: '/:slug',
        element: <TireDetailsPage />

    }
]

export default StoreRoutes