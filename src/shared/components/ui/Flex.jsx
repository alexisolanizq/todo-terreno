
const Flex = ({
    children,
    className = "",
    justify = "center",
    align = "center",
    ...props
}) => {
    return (
        <div className={`flex gap-2 justify-${justify} items-${align} ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Flex