
const Flex = ({ children, className = "", ...props }) => {
    return (
        <div className={`flex gap-2 ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Flex