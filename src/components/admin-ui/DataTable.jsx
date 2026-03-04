import React, { useState } from 'react'
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'

const DataTable = ({ data = [], columns = [], actionButton }) => {

    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting
        },
        onSortingChange: setSorting,
        getFilteredRowModel: getFilteredRowModel()
    })

    return (
        <>
            {
                actionButton && (
                    <div className='ml-auto'>
                        <button className='' onClick={actionButton}>Agregar nuevo</button>
                    </div>
                )
            }
            <div className="w-full rounded-lg shadow-lg">
                <table>
                    <thead>
                        {
                            table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {
                                        headerGroup.headers.map((header) => (
                                            <th key={header.id} onClick={header.column.getToggleSortingHandler()} className='cursor-pointer'>
                                                {
                                                    flexRender(header.column.columnDef.header, header.getContext())
                                                }
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </thead>
                </table>
            </div>
        </>
    )
}

export default DataTable