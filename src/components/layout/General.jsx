import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from 'src/components/layout/Navbar'
import Footer from 'src/components/layout/Footer'
import GlassSection from './GlassSection'

const General = () => {
    return (
        <div className='relative'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default General