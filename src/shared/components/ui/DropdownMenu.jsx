import React from 'react'

const DropdownMenu = ({
    onClick = () => { },
    items = [],
    isActive = false,
    placeholder = "",
    keyValue = 'id',
    keyLabel = 'title',
}) => {
    return (
        <div className='rounded-lg p-3 bg-primary shadow-sm'>
            <button className='w-full flex items-center justify-between text-neutral-600' onClick={() => onClick(!isActive)}>
                <p className=''>{placeholder}</p>
                <i className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ease-in-out ${isActive ? "rotate-180" : "rotate-0"
                    }`} />
            </button>
            <div className='space-y-2'>
                {
                    isActive && items.map((item) => (
                        <div key={item[keyValue]} className='hover:bg-neutral-200/70 rounded-lg px-4 py-1'>
                            {item[keyLabel]}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DropdownMenu