import ProductCard from "./ProductCard"

const RelatedModels = ({ items = [] }) => {
    return (
        <div className="flex flex-row w-full items-center justify-center gap-4">
            {
                items.map((item) => (
                    <ProductCard hideFooter className="flex-1" product={item} />
                ))
            }
        </div>
    )
}

export default RelatedModels