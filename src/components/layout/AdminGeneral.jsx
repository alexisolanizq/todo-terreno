import { Outlet } from 'react-router-dom'
import ScrollTop from 'src/components/layout/ScrollTop'

const AdminGeneral = () => {
    return (
        <>
            <ScrollTop />
            <div className="relative">
                <nav className=''>

                </nav>
                <Outlet />
                <footer>

                </footer>
            </div>
        </>
    )
}

export default AdminGeneral