import React from 'react'
import Section from 'src/components/layout/Section'
import ProductCard from 'src/features/product/components/ProductCard'

const FeaturedProducts = ({ products = [1, 2, 3] }) => {
  return (
    <Section density='compact' title="Productos Destacados" description='No te pierdas nuestras ofertas' actions={[{ label: 'Ver más' }]}>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4">
        {
          products.map((product) => (
            <ProductCard product={product} key={product} />
          ))
        }
      </div>
    </Section>
  )
}

export default FeaturedProducts