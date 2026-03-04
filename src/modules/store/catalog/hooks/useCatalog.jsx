import { useState } from "react"
import { useFetchTiresQuery } from "../../queries/tire.query"

const useCatalog = () => {

    const [categoryTab, setCategoryTab] = useState(false)
    const [brandTab, setBrandTab] = useState(false)
    const [measureTab, setMeasureTab] = useState(true)

    const { data: tires } = useFetchTiresQuery()

    return {
        tires,
        brandTab,
        measureTab,
        setBrandTab,
        categoryTab,
        setMeasureTab,
        setCategoryTab,
    }
}

export default useCatalog