import React, { useState } from 'react'
import TireSearchBySize from 'src/features/search/components/TireSearchBySize';
import TireSearchByBrand from 'src/features/search/components/TireSearchByBrand';

const useTireSearch = () => {

    const [activeTab, setActiveTab] = useState("measure");

    const tabs = [
        {
            id: 'measure',
            label: 'Buscar por medidas',
            component: <TireSearchBySize />
        },
        {
            id: 'brands',
            label: 'Buscar por marcas',
            component: <TireSearchByBrand />
        },
        {
            id: 'model',
            label: 'Buscar por vehículo',
            component: <TireSearchByBrand />
        },
    ]

    const activeTabComponent = tabs.find(tab => tab.id === activeTab)

    return {
        tabs,
        activeTabComponent,
        setActiveTab,
        activeTab
    }
}

export default useTireSearch