import Section from 'src/components/store-ui/Section'
import Skeleton from 'src/shared/components/ui/Skeleton'
import ProductCard from '../../home/components/ProductCard'
import DropdownMenu from 'src/shared/components/ui/DropdownMenu'
import useCatalog from 'src/modules/store/catalog/hooks/useCatalog'
import TextFieldController from 'src/shared/components/form/TextFieldController'
import DropdownController from 'src/shared/components/form/DropdownController'
import { mapToOptions } from 'src/utils/mapToOptions'

const CatalogPage = () => {

    const {
        data,
        brandTab,
        isLoading,
        measureTab,
        categoryTab,
        setBrandTab,
        setMeasureTab,
        setCategoryTab,
        handleAddToCart,
        isAdding,
        control,
        filters,
        isLoadingTireSizes,
        tireSizes,

        rimDiameterTab, setRimDiameterTab,
        profileTab, setProfileTab,
        widthTab, setWidthTab,
    } = useCatalog()

    return (
        <>
            <div className="bg-hero py-10">
                <h2 className="text-center capitalize text-primary font-heading text-3xl md:text-4xl font-bold text-foreground">Encuentra La Llanta Perfecta</h2>
                <p className="text-primary text-center text-lg text-muted "></p>
            </div>
            <Section densityY='none' className='px-5 lg:px-20'>
                <div className="mt-10">
                    <div className='w-full flex gap-10 flex-col md:flex-row py-6'>
                        <div className='flex flex-col gap-4'>
                            <TextFieldController control={control} name='seach' />
                            <DropdownController
                                control={control}
                                name="width"
                                items={mapToOptions(tireSizes?.widths)}
                                placeholder='Ancho'
                                isActive={widthTab}
                                onToggle={setWidthTab}
                            />
                            <DropdownController
                                control={control}
                                name="profile"
                                items={mapToOptions(tireSizes?.aspect_ratio)}
                                placeholder='Perfil'
                                isActive={profileTab}
                                onToggle={setProfileTab}
                            />
                            <DropdownController
                                control={control}
                                name="rim"
                                items={mapToOptions(tireSizes?.rim_diameters)}
                                placeholder='Rin'
                                isActive={rimDiameterTab}
                                onToggle={setRimDiameterTab}
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
                                <p className='text-sm font-semibold'>{data?.total} <span className='font-normal'>productos encontrados</span></p>
                                <button className='flex items-center justify-center gap-x-2 px-4 py-1 rounded-lg bg-primary'>
                                    <i className='ri-arrow-up-down-fill' />
                                    <p>Mayor precio</p>
                                    <i className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ease-in-out ${brandTab ? "rotate-180" : "rotate-0"
                                        }`} />
                                </button>
                            </div>
                            <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-4'>
                                {
                                    isLoading ? Array.from({ length: 4 }).map((_, i) =>
                                        <Skeleton key={i} />
                                    ) :
                                        data?.data?.map((item) => (
                                            <ProductCard key={item.id} product={item} onBuy={() => handleAddToCart(item?.id)} isAdding={isAdding} />
                                        ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default CatalogPage