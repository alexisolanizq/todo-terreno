import React from 'react'

const AdminNavbar = () => {
    return (
        <div className='bg-admin-background-100 z-10 shrink-0 flex items-center justify-between p-4 shadow-xl'>
            <nav className="container flex justify-end">

                <button>
                    <i className='ri-logout-box-r-line text-primary' />
                </button>
            </nav>
        </div>
    )
}

export default AdminNavbar