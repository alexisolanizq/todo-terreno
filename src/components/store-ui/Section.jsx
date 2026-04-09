
const Section = ({ children, className = '', densityY = "normal", densityX = "xsmall", title = false, description = '', actions = [] }) => {

    const verticalPadding = {
        none: 'p-0',
        xsmall: 'py-5',
        compact: 'py-10',
        normal: 'py-20',
        large: 'py-34'
    }

    const horizontalPadding = {
        none: 'p-0',
        xsmall: 'px-5',
        compact: 'px-10',
        normal: 'px-20',
        large: 'px-34'
    }

    const paddingY = verticalPadding[densityY] || verticalPadding['normal']
    const paddingX = horizontalPadding[densityX] || horizontalPadding['normal']

    return (
        <div className={`w-full ${paddingY} ${className}`}>
            <div className={`w-full ${densityY === 'none' ? 'w-full' : 'lg:w-[80%]'} mx-auto flex flex-col justify-start ${paddingX}`}>
                {
                    title && (
                        <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center gap-2 mb-10">
                            {
                                title && (
                                    <div className="flex flex-col gap-y-1">
                                        <h2 className="text-3xl font-semibold">{title}</h2>
                                        {
                                            description && <p className="text-muted text-sm">{description}</p>
                                        }
                                    </div>
                                )
                            }
                            {
                                actions.length > 0 && (
                                    <div className="flex space-x-2">
                                        {actions.map((action, index) => (
                                            <button onClick={action?.action} key={index} className="text-sm hover:text-secondary font-semibold transition-colors">
                                                {action.label} <i className="ri-arrow-right-line" />
                                            </button>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                {children}
            </div>
        </div>
    )
}

export default Section