import Hero from "src/modules/store/home/components/Hero"
import TireSearch from "src/modules/store/home/components/TireSearch"
import CategoryCards from "src/modules/store/home/components/CategoryCards"
import BrandsCarousel from "src/modules/store/home/components/BrandsCarousel"
import TopSelling from "src/modules/store/home/components/TopSelling"


const HomePage = () => {

  console.log("API URL:", import.meta.env.VITE_API_URL);

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