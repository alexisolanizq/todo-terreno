
const Form = ({ children, className = '' }) => {
    return (
        <form className={`${className} grid grid-cols-1 lg:grid-cols-${children.length ?? 1} gap-3`}>{children}</form>
    )
}

export default Form