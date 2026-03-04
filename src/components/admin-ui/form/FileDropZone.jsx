import React, { useRef, useState } from 'react';

const FileDropZone = ({
    name,
    error,
    value = [],
    onChange = () => { },
    ...rest
}) => {

    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef(null);

    const files = Array.isArray(value) ? value : [];

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        onChange([...files, ...droppedFiles]);
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        onChange([...files, ...selectedFiles]);
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => inputRef.current.click()}
            className={`
                flex flex-col items-center justify-center
                border-2 border-dashed rounded-lg p-8
                cursor-pointer transition
                ${isDragging
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }
            `}
        >
            <input
                {...rest}
                ref={(e) => {
                    inputRef.current = e;
                }}
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
            />

            <p className="text-gray-500 text-center">
                {isDragging
                    ? "Suelta los archivos aquí"
                    : "Arrastra archivos aquí o haz clic para seleccionar"
                }
            </p>

            {files.length > 0 && (
                <ul className="mt-4 space-y-2 w-full gap-4 flex flex-wrap items-center justify-center">
                    {files.map((file, index) => (
                        <li
                            key={`${file.name}-${index}`}
                            className="flex-1 lg:flex-none text-sm text-gray-600 bg-gray-100 p-2 rounded inline-flex justify-between"
                        >
                            <span className="truncate">{file.name}</span>
                        </li>
                    ))}
                </ul>
            )}

            {
                error && <p className='text-red-600 font-medium'>{error.message}</p>
            }
        </div>
    );
};

export default FileDropZone;