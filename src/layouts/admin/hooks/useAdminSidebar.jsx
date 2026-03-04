import { useState } from "react"
import { useFetchAdminSidebar } from "../queries/admin.query"

const useAdminSidebar = () => {

    const {data} = useFetchAdminSidebar()
    const [isOpen, setIsOpen] = useState(true)

    return {
        data,
        isOpen
    }
}

export default useAdminSidebar