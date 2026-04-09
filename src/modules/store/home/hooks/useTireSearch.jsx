import { useNavigate } from "react-router-dom"
import { useTireSearchBySize } from "../queries/useTireSearchQuery"
import { useForm } from "react-hook-form"

const useTireSearch = () => {

  const navigate = useNavigate()
  const { handleSubmit, control } = useForm()

  const { data: tireSizes } = useTireSearchBySize()

  const onSubmit = (payload) => {

    console.log(payload);

    const params = new URLSearchParams()

    if (payload.width) {
      params.append("width", payload.width)
    }

    if (payload.aspect_ratio) {
      params.append("profile", payload.aspect_ratio)
    }

    if (payload.rim_diameter) {
      params.append("rim", payload.rim_diameter)
    }

    console.log(params);


    navigate(`/catalogo?${params.toString()}`)
  }

  return {
    control,
    onSubmit,
    tireSizes,
    handleSubmit
  }
}

export default useTireSearch