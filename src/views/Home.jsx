import GlassSection from "src/components/layout/GlassSection"
import Hero from "src/views/main/Hero"
import Brands from "src/views/main/Brands"
import TireSearch from "src/views/main/TireSearch/TireSearch"
import FeaturedProducts from "src/components/common/FeaturedProducts"
import Categories from "src/views/main/Categories"

const Home = () => {

  return (
    <>
      <Hero />
      <TireSearch />
      <FeaturedProducts />
      <Brands />
      <Categories />
    </>
  )
}

export default Home