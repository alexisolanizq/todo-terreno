import heroTire from '/public/hero-tire.webp'
import { Link } from 'react-router-dom'
import useCatalog from 'src/modules/store/catalog/hooks/useCatalog'
import { brands } from 'src/utils/brands'
import { formatString } from 'src/utils/format'

const CatalogPage = () => {

    const {
        brandTab,
        categoryTab,
        measureTab,
        setBrandTab,
        setCategoryTab,
        setMeasureTab,
        tires
    } = useCatalog()

    return (
        <section>
            <div className="bg-hero py-10">
                <div className="">
                    <h2 className="text-center capitalize text-primary font-heading text-3xl md:text-4xl font-bold text-foreground">Encuentra La Llanta Perfecta</h2>
                    <p className="text-primary text-center text-lg text-muted ">Búsqueda rápida por medida o marca</p>
                </div>
            </div>
            <div className="mx-auto w-[90%] mt-10">
                <div className='w-full flex gap-20 flex-col md:flex-row py-6'>
                    <div className='hidden lg:flex flex-col gap-4'>
                        <div>
                            <label htmlFor='search' className='font-medium text-neutral-500'>Buscar</label>
                            <div className='relative'>
                                <i className="absolute ri-search-line text-xl top-1/2 -translate-y-1/2 left-3 text-neutral-400" />
                                <input type="text" id='search' name='search' className='bg-primary pl-10 py-3 rounded-lg text-neutral-500 outline-neutral-300' />
                            </div>
                        </div>
                        <div className='rounded-lg p-3 bg-primary'>
                            <button className='w-full flex items-center justify-between text-neutral-600' onClick={() => setBrandTab(!brandTab)}>
                                <p className=''>Marcas</p>
                                <i className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ease-in-out ${brandTab ? "rotate-180" : "rotate-0"
                                    }`} />
                            </button>
                            <div className='space-y-2'>
                                {
                                    brandTab && brands.map((brand) => (
                                        <div key={brand.id} className='hover:bg-neutral-200/70 rounded-lg px-4 py-1'>
                                            {brand.name}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='rounded-lg p-3 bg-primary'>
                            <button className='w-full flex items-center justify-between text-neutral-600' onClick={() => setCategoryTab(!categoryTab)}>
                                <p className=''>Categorías</p>
                                <i className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ease-in-out ${categoryTab ? "rotate-180" : "rotate-0"
                                    }`} />
                            </button>
                            <div className='space-y-2'>
                                {
                                    categoryTab && brands.map((brand) => (
                                        <div key={brand.id} className='hover:bg-neutral-200/70 rounded-lg px-4 py-1'>
                                            {brand.name}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='rounded-lg p-3 bg-primary'>
                            <button className='w-full flex items-center justify-between text-neutral-600' onClick={() => setMeasureTab(!measureTab)}>
                                <p className=''>Medidas</p>
                                <i className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ease-in-out ${measureTab ? "rotate-180" : "rotate-0"
                                    }`} />
                            </button>
                            <div className='space-y-2'>
                                {
                                    measureTab && brands.map((brand) => (
                                        <div key={brand.id} className='hover:bg-neutral-200/70 rounded-lg px-4 py-1'>
                                            {brand.name}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between items-center'>
                            <p className='text-sm font-semibold'>12 <span className='font-normal'>productos encontrados</span></p>
                            <div>
                                <button className='flex items-center justify-center gap-x-2 px-4 py-1 rounded-lg bg-primary'>
                                    <i className='ri-arrow-up-down-fill' />
                                    <p>Mayor precio</p>
                                    <i className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ease-in-out ${brandTab ? "rotate-180" : "rotate-0"
                                        }`} />
                                </button>
                            </div>
                        </div>
                        <div className='flex-1 w-full grid grid-cols-1 lg:grid-cols-4 gap-4'>
                            {
                                tires?.map((item) => (
                                    <div key={item?.id} className='rounded-xl relative transition bg-primary'>
                                        <Link to={`/${item?.slug}`} className='w-full'>
                                            <img src="https://llantastogo.com/images/models/medium/contipowercontact-84h-185-60R15.webp" alt="" className='rounded-t-xl pt-4 w-1/2 mx-auto' />
                                        </Link>
                                        <div className='flex flex-col gap-y-2 mx-auto w-11/12 py-4'>
                                            <p className='text-sm text-secondary'>{item?.brand?.name}</p>
                                            <p className='text-lg font-medium'>{formatString(item?.size?.label)}</p>
                                            <Link to={`/${item?.slug}`} className='text-sm font-medium'>{item?.model_name}</Link>
                                            <p className='font-semibold text-lg'>${item?.price} <span className='text-muted text-xs font-normal uppercase'>mxn</span></p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CatalogPage