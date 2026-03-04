import { useParams } from "react-router-dom"
import { useTireDetailQuery } from "../queries/tire.query"

const useTireDetail = () => {

  const { slug } = useParams()

  const { data: { tire, related } = {}, isLoading, } = useTireDetailQuery(slug)

  return {
    tire: tire,
    related: related,
    isLoading
  }
}

export default useTireDetail