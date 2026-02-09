import React from 'react'
import Section from 'src/components/layout/Section'
import ProductCard from 'src/features/product/components/ProductCard'
import useTopSelling from '../hooks/useTopSelling'

const TopSelling = () => {

  const { data: topSelling, isLoading } = useTopSelling()

  console.log(topSelling, isLoading);


  return (
    <Section density='compact' title="Productos Destacados" description='No te pierdas nuestras ofertas' actions={[{ label: 'Ver más' }]}>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4">
        {
        isLoading && (
            'Cargando'
          )
        }
        {
          topSelling?.map((tire) => (
            <ProductCard product={tire} key={tire?.id} />
          ))
        }
      </div>
    </Section>
  )
}

export default TopSelling