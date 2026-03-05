import React from 'react'

const QuantityCart = ({
    hideLabel = false
}) => {
    return (
        <div className='flex flex-col gap-2'>
            {
                !hideLabel && (
                    <p>Cantidad:</p>
                )
            }
            <div className='flex items-center w-fit rounded-xl outline-1 outline-primary-strong overflow-hidden font-medium'>
                <button className='w-10 h-10 hover:bg-neutral-100'>-</button>
                <span className='w-10 h-10 flex items-center justify-center'>6</span>
                <button className='w-10 h-10 hover:bg-neutral-100'>+</button>
            </div>
        </div>
    )
}

export default QuantityCart