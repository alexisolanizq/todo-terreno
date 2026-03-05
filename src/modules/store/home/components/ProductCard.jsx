import { Link } from "react-router-dom"

const ProductCard = ({ product, onBuy, onToggleFavorite, hideFooter = false, ...props }) => {
    return (
        <div className="bg-primary w-full px-6 py-4 shadow rounded-2xl flex flex-col items-start group flex-1">
            <Link to={`/${product?.slug}`} className='self-center'>
                <img src="https://llantastogo.com/images/models/medium/contipowercontact-84h-185-60R15.webp" className='w-38 group-hover:scale-110 group-hover:-rotate-6 transition-transform' alt="Tire" />
            </Link>
            <div className='flex flex-col gap-y-2 w-full mb-3'>
                <p className='text-sm text-secondary'>{product?.brand?.name}</p>
                <Link to={product?.slug} className='text-lg'>{product?.model_name}</Link>
                <p className='text-neutral-700 text-sm'>{product?.size?.label}</p>
                <div className="flex items-center gap-x-2">
                    <h2 className='text-lg font-semibold'>${product?.price}</h2>
                    <p className='text-secondary text-xs'>{product.stock <= 5 && "(Pocas piezas)"}</p>
                </div>
            </div>
            {
                !hideFooter && (
                    <div className='flex gap-4 w-full'>
                        <button onClick={onToggleFavorite} className="rounded-full bg-primary-soft outline-1 outline-primary-strong hover:bg-primary-strong w-10 h-10">
                            <i className='ri-heart-line font-medium text-xl' />
                        </button>
                        <button className="flex flex-1 items-center justify-center gap-4 rounded-full bg-secondary text-primary hover:bg-secondary-strong w-10 h-10" onClick={onBuy}>
                            <i className='ri-shopping-cart-line font-medium text-lg' />
                            <p>Agregar</p>
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default ProductCard