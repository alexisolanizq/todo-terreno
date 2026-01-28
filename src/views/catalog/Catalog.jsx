import heroTire from '/public/hero-tire.webp'
import { Link } from 'react-router-dom'
import useCatalog from 'src/hooks/layout/useCatalog'
import { brands } from 'src/utils/brands'

const Catalog = () => {

    const { brandTab, categoryTab, measureTab, setBrandTab, setCategoryTab, setMeasureTab } = useCatalog()

    return (
        <section>
            <div className="bg-hero py-10">
                <div className="">
                    <h2 className="text-center capitalize text-white font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Encuentra La Llanta Perfecta</h2>
                    <p className="text-center text-lg text-muted ">Búsqueda rápida por medida o marca</p>
                </div>
            </div>
            <div className="mx-auto w-[90%] mt-10">
                <div className='w-full flex gap-20 flex-col md:flex-row py-6'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <label htmlFor='search' className='font-medium text-neutral-500'>Buscar</label>
                            <div className='relative'>
                                <i className="absolute ri-search-line text-xl top-1/2 -translate-y-1/2 left-3 text-neutral-400" />
                                <input type="text" id='search' name='search' className='bg-neutral-100 pl-10 py-3 rounded-lg border-2 border-neutral-200 text-neutral-500 outline-neutral-300' />
                            </div>
                        </div>
                        <div className='rounded-lg p-3 border-2 bg-neutral-100 border-neutral-200'>
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
                        <div className='rounded-lg p-3 border-2 bg-neutral-100 border-neutral-200'>
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
                        <div className='rounded-lg p-3 border-2 bg-neutral-100 border-neutral-200'>
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
                                <button className='flex items-center justify-center gap-x-2 px-4 py-1 rounded-lg border-2 border-neutral-200'>
                                    <i className='ri-arrow-up-down-fill' />
                                    <p>Mayor precio</p>
                                    <i className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ease-in-out ${brandTab ? "rotate-180" : "rotate-0"
                                        }`} />
                                </button>
                            </div>
                        </div>
                        <div className='flex-1 w-full grid grid-cols-1 lg:grid-cols-3 gap-4'>
                            {
                                [...brands, ...brands, ...brands].map((item) => (
                                    <div key={item} className='shadow-lg rounded-xl relative transition group'>
                                        <Link className="absolute top-4 right-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100 shadow">
                                            <i className='ri-eye-line text-white text-2xl bg-orange-500 rounded-full p-2' />
                                        </Link>
                                        <img src={heroTire} alt="" className='rounded-t-xl' />
                                        <div className='space-y-1 mx-auto w-11/12 py-4'>
                                            <p className='text-sm text-accent-orange'>Michelin</p>
                                            <p className='font-medium'>Michelin Pilot Sport 5</p>
                                            <p className='text-muted'>225/45R18</p>
                                            <div className='h-px bg-muted/40' />
                                            <p className='font-semibold text-lg'>$2429.00 <span className='text-muted text-xs font-normal uppercase'>mxn</span></p>
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

export default Catalog