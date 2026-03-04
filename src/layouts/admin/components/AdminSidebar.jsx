import React, { useState } from 'react'
import logo from "/public/logo.svg"
import useAdminSidebar from '../hooks/useAdminSidebar'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {

    const { data, isOpen } = useAdminSidebar()

    console.log(data);


    return (
        <aside className={`flex flex-col justify-between transition-all duration-300 ease-in-out bg-admin-background-200 overflow-y-auto p-4 ${isOpen ? 'w-64' : 'w-0 lg:w-20'}`}>
            <div className='flex flex-col gap-y-10'>
                <div>
                    <p className='text-primary font-black text-2xl'>Todo Terreno</p>
                    {/* <img src={logo} alt="Logo" /> */}
                </div>

                <ul className='text-primary'>
                    {
                        data?.length > 0 && data?.map((item) => (
                            <li key={item.id}>
                                {item.link ? (
                                    <Link className='p-2 flex items-center gap-x-4' to={`/${item.link}`}>
                                        <i className={item.icon} />
                                        <p>{item.title}</p>
                                    </Link>
                                ) : (
                                    <>
                                        <button className='p-2 flex items-center gap-x-4'>
                                            <i className={item.icon} />
                                            <p>{item.title}</p>
                                        </button>
                                        <div>
                                            {
                                                item?.children?.map((children) => (
                                                    <div className='flex flex-col ml-8' key={children.id}>
                                                        <Link className='p-2 flex items-center gap-x-4' to={`/${children.link}`} key={children.id}>
                                                            <i className={children.icon} />
                                                            <p>
                                                                {children.title}
                                                            </p>
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </>
                                )}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>

            </div>

        </aside>
    )
}

export default AdminSidebar