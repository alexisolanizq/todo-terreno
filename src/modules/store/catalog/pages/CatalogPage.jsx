import { Link } from 'react-router-dom'
import Section from 'src/components/sotre-ui/Section'
import useCatalog from 'src/modules/store/catalog/hooks/useCatalog'
import DropdownMenu from 'src/shared/components/ui/DropdownMenu'
import Skeleton from 'src/shared/components/ui/Skeleton'
import { brands } from 'src/utils/brands'
import { formatString } from 'src/utils/format'
import ProductCard from '../../home/components/ProductCard'
import TextField from 'src/shared/components/form/TextField'

const CatalogPage = () => {

    const {
        brandTab,
        categoryTab,
        measureTab,
        setBrandTab,
        setCategoryTab,
        setMeasureTab,
        tires,
        isLoading
    } = useCatalog()

    return (
        <Section density='none'>
            <div className="bg-hero py-10">
                <div className="">
                    <h2 className="text-center capitalize text-primary font-heading text-3xl md:text-4xl font-bold text-foreground">Encuentra La Llanta Perfecta</h2>
                    <p className="text-primary text-center text-lg text-muted ">Búsqueda rápida por medida o marca</p>
                </div>
            </div>
            <div className="mx-auto w-[90%] mt-10">
                <div className='w-full flex gap-10 lg:gap-20 flex-col md:flex-row py-6'>
                    <div className='flex flex-col gap-4'>
                        <TextField name='seach' />
                        <DropdownMenu
                            placeholder='Ancho'
                            isActive={measureTab}
                            onClick={setMeasureTab}
                        />
                        <DropdownMenu
                            placeholder='Perfil'
                            isActive={measureTab}
                            onClick={setMeasureTab}
                        />
                        <DropdownMenu
                            placeholder='Rin'
                            isActive={measureTab}
                            onClick={setMeasureTab}
                        />
                        <DropdownMenu
                            placeholder='Marcas'
                            isActive={brandTab}
                            onClick={setBrandTab}
                        />
                        <DropdownMenu
                            placeholder='Categorías'
                            isActive={categoryTab}
                            onClick={setCategoryTab}
                        />
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='flex justify-between items-center'>
                            <p className='text-sm font-semibold'>{tires?.length} <span className='font-normal'>productos encontrados</span></p>
                            <button className='flex items-center justify-center gap-x-2 px-4 py-1 rounded-lg bg-primary'>
                                <i className='ri-arrow-up-down-fill' />
                                <p>Mayor precio</p>
                                <i className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ease-in-out ${brandTab ? "rotate-180" : "rotate-0"
                                    }`} />
                            </button>
                        </div>
                        <div className='flex-1 w-full grid grid-cols-1 lg:grid-cols-4 gap-4'>
                            {
                                isLoading ? Array.from({ length: 4 }).map((_, i) =>
                                    <Skeleton key={i} />
                                ) :
                                    tires?.map((item) => (
                                        <ProductCard key={item.id} product={item} />
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default CatalogPage