import { useState } from "react"

const useCatalog = () => {

    const [categoryTab, setCategoryTab] = useState(false)
    const [brandTab, setBrandTab] = useState(false)
    const [measureTab, setMeasureTab] = useState(true)

    return {
        categoryTab,
        setCategoryTab,
        measureTab,
        setMeasureTab,
        setBrandTab,
        brandTab
    }
}

export default useCatalog