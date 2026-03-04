import React from 'react'
import { useParams } from 'react-router-dom'
import truck from '/public/truck.webp'
import Section from 'src/components/sotre-ui/Section'
import Select from 'src/shared/components/form/Select'
import Button from 'src/shared/components/ui/Button'
import QuantityCart from '../home/components/QuantityCart'
import Label from 'src/shared/components/ui/Label'
import useTireDetail from '../hooks/useTireDetail'
import ProductSkeleton from 'src/shared/components/ui/ProductSkeleton'
import Flex from 'src/shared/components/ui/Flex'
import RelatedModels from '../home/components/RelatedModels'

const ProductDetailPage = () => {

  const { isLoading, tire, related } = useTireDetail()


  if (isLoading) {
    return (
      <Section>
        <ProductSkeleton />
      </Section>
    )
  }

  return (
    <Section actions={['Regresar']}>
      <div className="flex gap-10">
        <div className='flex-1 bg-primary rounded-2xl flex justify-center items-center'>
          <img src="https://llantastogo.com/images/models/medium/contipowercontact-84h-185-60R15.webp" alt="Truck" className='w-56' />
        </div>
        <div className='flex flex-col flex-1 gap-y-4 w-full self-start'>
          <p className='text-secondary font-medium text-lg'>{tire?.brand?.name}</p>
          <h1 className='text-3xl font-semibold uppercase'>{tire?.model_name}</h1>
          <Label title="Medida" value={tire?.size?.label} />
          <div className='rounded-xl bg-primary p-4 flex gap-2 items-center'>
            <p className='font-semibold text-3xl'>${tire?.price}</p>
            <span className='text-neutral-500'>MXN - C/U</span>
          </div>
          <Label title="Indice de carga" value="" />
          <Label title="Indice de velocidad" value="" />
          <QuantityCart />
          <Button className='w-full'>Agregar al carrito</Button>
        </div>
      </div>
      <Flex className='mt-14'>
        <RelatedModels items={related} />
      </Flex>

    </Section>
  )
}

export default ProductDetailPage