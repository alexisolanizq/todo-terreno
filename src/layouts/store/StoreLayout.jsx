import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollTop from 'src/shared/components/ui/ScrollTop'
import StoreNavbar from 'src/layouts/store/components/StoreNavbar'
import StoreFooter from 'src/layouts/store/components/StoreFooter'

const StoreLayout = () => {
    return (
        <>
            <ScrollTop />
            <div className='relative'>
                <StoreNavbar />
                <Outlet />
                <StoreFooter />
            </div>
        </>
    )
}

export default StoreLayout