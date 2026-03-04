import React from 'react'
import Flex from './Flex'

const Label = ({ title, value }) => {
    return (
        <Flex>
            <p className='text-lg text-neutral-400'>{title}:</p>
            <p className='text-lg'>{value}</p>
        </Flex>
    )
}

export default Label