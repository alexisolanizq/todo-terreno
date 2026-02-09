import Hero from "src/features/marketing/components/Hero"
import TireSearch from "src/features/search/components/TireSearch"
import CategoryCards from "src/features/catalog/components/CategoryCards"
import BrandsCarousel from "src/features/catalog/components/BrandsCarousel"
import TopSelling from "src/features/catalog/components/TopSelling"


const HomePage = () => {

  return (
    <>
      <Hero />
      <TireSearch />
      <TopSelling />
      <BrandsCarousel />
      <CategoryCards />
    </>
  )
}

export default HomePage