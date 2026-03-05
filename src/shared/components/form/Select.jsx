import React from 'react'

const Select = ({ name = 'name', label = '', placeholder = "Seleccione", options = [], keyValue = 'id', keyLabel = 'name', hiddeLabel = false, ...props }) => {
    return (
        <div className='flex flex-col gap-2' {...props}>

            {
                !hiddeLabel &&
                <label className='text-sm text-neutral-500' htmlFor={name}>{label}</label>
            }

            <select className='w-full bg-neutral-100 px-2 py-3 rounded-xl border-2 border-neutral-200 text-neutral-500 outline-neutral-300' name={name} id={name}>
                <option value=''>{placeholder}</option>
                {options.map((option, index) => (
                    <option key={option[keyValue] ?? index}>
                        {option[keyLabel] || option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select