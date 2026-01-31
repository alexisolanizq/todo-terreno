import Hero from "src/features/marketing/components/Hero"
import TireSearch from "src/features/search/components/TireSearch"
import CategoryCards from "src/features/catalog/components/CategoryCards"
import BrandsCarousel from "src/features/catalog/components/BrandsCarousel"
import FeaturedProducts from "src/features/catalog/components/FeaturedProducts"


const HomePage = () => {

  return (
    <>
      <Hero />
      <TireSearch />
      <FeaturedProducts />
      <BrandsCarousel />
      <CategoryCards />
    </>
  )
}

export default HomePage