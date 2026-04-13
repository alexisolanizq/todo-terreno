import React from 'react'
import Section from 'src/components/store-ui/Section'
import ProductCard from 'src/modules/store/home/components/ProductCard'
import Skeleton from 'src/shared/components/ui/Skeleton'
import useTopSellings from '../hooks/useTopSellings'
import useCart from '../../cart/hooks/useCart'

const TopSelling = () => {

  const { topSellings, isLoading } = useTopSellings()
  const { addItem, isLoading: isAdding } = useCart()

  return (
    <Section densityY='compact' title="Productos Destacados" description='No te pierdas nuestras ofertas' actions={[{ label: 'Ver más' }]}>
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-4">
        {
          isLoading ? Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} />
          ))
            :
            topSellings?.map((tire) => (
              <ProductCard product={tire} key={tire?.id} onBuy={() => addItem(tire?.id)} isAdding={isAdding} />
            ))
        }
      </div>
    </Section>
  )
}

export default TopSelling