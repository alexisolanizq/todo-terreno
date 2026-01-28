
const Button = ({
    children,
    variant = "primary",
    size = "normal",
    className = "",
    ...props
}) => {

    // 1. Clases Base: Flexbox para centrar, transición suave, y sin borde por defecto
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full self-end"; // O rounded-full si tu diseño es muy curvo

    // 2. Variantes de Estilo (Jerarquía Visual)
    const variants = {
        primary: "bg-orange-500 text-white hover:bg-orange-400 focus:ring-orange-100", // El botón de "Comprar"
        secondary: "bg-blue-800 text-white hover:bg-blue-900 focus:ring-blue-500", // Botones de "Ver detalles"
        outline: "border-2 border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-500 bg-transparent" // Acciones secundarias limpias
    };

    // 3. Tamaños (Aquí aplicamos la armonía con tus secciones grandes)
    const sizes = {
        normal: "px-6 py-3 text-sm",      // Para listas de productos o formularios
        large: "px-8 py-4 text-base",     // Para el Hero o Call to Actions principales
        compact: "px-4 py-2 text-xs"      // Solo para tablas o zonas muy densas
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;