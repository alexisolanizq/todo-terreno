import ProductCard from "./ProductCard"

const RelatedModels = ({ items = [], className = '' }) => {
    return (
        <div className={`flex flex-col lg:flex-row w-full items-center justify-center gap-4 ${className}`}>
            {
                items.map((item) => (
                    <ProductCard key={item.id} hideFooter className="flex-1" product={item} />
                ))
            }
        </div>
    )
}

export default RelatedModels