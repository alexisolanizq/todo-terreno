import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from 'src/components/layout/Navbar'
import Footer from 'src/components/layout/Footer'
import ScrollTop from 'src/components/layout/ScrollTop'

const General = () => {
    return (
        <>
        <ScrollTop />
        <div className='relative'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
        </>
    )
}

export default General