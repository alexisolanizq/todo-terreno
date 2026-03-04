import React from 'react'

const Skeleton = () => (
    <div className="bg-primary outline-1 outline-primary-strong p-4 rounded-2xl animate-pulse">
        <div className="bg-gray-200 h-40 rounded-t-2xl mb-4"></div>
        <div className="bg-gray-200 h-4 w-full mb-2 rounded"></div>
        <div className="bg-gray-200 h-4 w-3/4 mb-2 rounded"></div>
        <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
        <div className="bg-gray-200 h-4 w-full mb-2 rounded"></div>
    </div>
)

export default Skeleton