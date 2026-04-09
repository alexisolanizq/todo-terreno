import { useEffect, useState } from "react"
import { useAddToCartQuery } from "../../cart/queries/cart.query"
import { useForm, useWatch } from "react-hook-form"
import { useCatalogTireSizesQuery, useTireCatalogQuery } from "../queries/catalog.query"
import { useSearchParams } from "react-router-dom"
import { parseArrayParam } from "src/utils/format"

const useCatalog = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const defaultValues = {
        search: searchParams.get("search") || "",
        width: [],
        profile: [],
        rim: [],
        brand: [],
        category: [],
    }

    useEffect(() => {
        const newValues = {
            width: parseArrayParam(searchParams.get("width")),
            profile: parseArrayParam(searchParams.get("profile")),
            rim: parseArrayParam(searchParams.get("rim")),
            brand: parseArrayParam(searchParams.get("brand")),
            category: parseArrayParam(searchParams.get("category")),
        }

        reset(newValues)
    }, [searchParams])

    const { control, reset } = useForm({
        defaultValues
    })

    const filters = useWatch({
        control
    })

    useEffect(() => {
        const params = {}
        Object.entries(filters).forEach(([key, value]) => {
            if (!value || value.length === 0) return
            params[key] = value.join(",")
        })
        setSearchParams(params)
    }, [filters])

    const [categoryTab, setCategoryTab] = useState(false)
    const [brandTab, setBrandTab] = useState(false)
    const [rimDiameterTab, setRimDiameterTab] = useState(false)
    const [profileTab, setProfileTab] = useState(false)
    const [widthTab, setWidthTab] = useState(false)

    const { data, isLoading } = useTireCatalogQuery(filters)

    const { data: tireSizes, isLoading: isLoadingTireSizes } = useCatalogTireSizesQuery()

    const addToCartMutation = useAddToCartQuery()

    const handleAddToCart = itemId => {
        addToCartMutation.mutateAsync({
            itemId,
            quantity: 1
        })
    }

    return {
        handleAddToCart,
        isAdding: addToCartMutation.isPending,
        control,
        filters,
        isLoadingTireSizes,
        tireSizes,

        data,
        brandTab,
        isLoading,
        setBrandTab,
        categoryTab,
        setCategoryTab,

        rimDiameterTab, setRimDiameterTab,
        profileTab, setProfileTab,
        widthTab, setWidthTab,
    }
}

export default useCatalog