import React from 'react'
import Section from 'src/components/sotre-ui/Section'
import ProductCard from 'src/modules/store/home/components/ProductCard'
import useTopSelling from '../../hooks/useTopSelling'
import Skeleton from 'src/shared/components/ui/Skeleton'

const TopSelling = () => {

  const { data: topSelling, isLoading } = useTopSelling()

  return (
    <Section density='compact' title="Productos Destacados" description='No te pierdas nuestras ofertas' actions={[{ label: 'Ver más' }]}>
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-4">
        {
          isLoading ? Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} />
          ))
            :
            topSelling?.map((tire) => (
              <ProductCard product={tire} key={tire?.id} />
            ))
        }
      </div>
    </Section>
  )
}

export default TopSelling