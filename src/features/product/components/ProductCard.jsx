
const ProductCard = ({ product, onBuy, onToggleFavorite }) => {
    return (
        <div className="bg-primary px-6 py-4 shadow rounded-2xl flex flex-col items-start outline-1 outline-primary-strong group">
            <div className='self-center'>
                <img src="https://llantastogo.com/images/models/medium/contipowercontact-84h-185-60R15.webp" className='w-38 group-hover:scale-110 group-hover:-rotate-6 transition-transform' alt="Tire" />
            </div>
            <div className='flex flex-col gap-1 mb-4'>
                <p className='text-muted text-sm'>Michelin</p>
                <h1 className='text-xl font-semibold'>Pilot Sport 4</h1>
                <p className='text-xs'>Alto rendimiento, excelente agarre en seco y mojado.</p>
                <p className='text-secondary text-sm font-medium'>Pocas piezas</p>
                <h1 className='text-xl font-semibold'>$2,999</h1>
            </div>
            <div className='flex gap-4 w-full right-8 top-6'>
                <button onClick={onToggleFavorite} className="rounded-full bg-primary-soft outline-1 outline-primary-strong hover:bg-primary-strong w-10 h-10">
                    <i className='ri-heart-line font-medium text-xl' />
                </button>
                <button className="flex flex-1 items-center justify-center gap-4 rounded-full bg-secondary text-primary hover:bg-secondary-strong w-10 h-10" onClick={onBuy}>
                    <i className='ri-shopping-cart-line font-medium text-xl' />
                    <p>Agregar al carrito</p>
                </button>
            </div>
        </div>
    )
}

export default ProductCard