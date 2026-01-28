import React, { useState } from 'react'
import TireBrandForm from 'src/views/main/TireSearch/components/TireBrandForm';
import TireSizeForm from 'src/views/main/TireSearch/components/TireSizeForm';

const useTireSearch = () => {

    const [activeTab, setActiveTab] = useState("measure");

    const tabs = [
        {
            id: 'measure',
            label: 'Buscar por medidas',
            component: <TireSizeForm />
        },
        {
            id: 'brands',
            label: 'Buscar por marcas',
            component: <TireBrandForm />
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