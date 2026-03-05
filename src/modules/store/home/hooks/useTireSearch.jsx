import { useTireSearchBySize } from "../queries/useTireSearchQuery"

const useTireSearch = () => {

  const { data: tireSizes } = useTireSearchBySize()

  console.log(tireSizes);


  return {
    tireSizes
  }
}

export default useTireSearch