import React from 'react'
import { useTireListQuery } from '../queries/tire.query'

const useTireList = () => {

    const { data: tires } = useTireListQuery()

    return {
        tires
    }
}

export default useTireList