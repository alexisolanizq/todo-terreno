import React from 'react'
import Section from 'src/components/store-ui/Section'
import ProductCard from 'src/modules/store/home/components/ProductCard'
import Skeleton from 'src/shared/components/ui/Skeleton'
import useTopSellings from '../hooks/useTopSellings'

const TopSelling = () => {

  const { topSellings, isLoading } = useTopSellings()

  return (
    <Section densityY='compact' title="Productos Destacados" description='No te pierdas nuestras ofertas' actions={[{ label: 'Ver más' }]}>
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-4">
        {
          isLoading ? Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} />
          ))
            :
            topSellings?.map((tire) => (
              <ProductCard product={tire} key={tire?.id} />
            ))
        }
      </div>
    </Section>
  )
}

export default TopSelling