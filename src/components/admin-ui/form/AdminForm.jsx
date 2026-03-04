import React from 'react'
import ButtonsForm from './ButtonsForm'

const AdminForm = ({ onSubmit, children, hiddeDefaultButtons = false, ...props }) => {
    return (
        <form className='w-full' onSubmit={onSubmit} {...props}>
            {children}
            {
                !hiddeDefaultButtons && (<ButtonsForm />)
            }
        </form>
    )
}

export default AdminForm