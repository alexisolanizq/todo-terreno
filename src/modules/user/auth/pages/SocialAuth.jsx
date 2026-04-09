import LoaderPage from "src/components/store-ui/LoaderPage"
import useSocialAuth from "../hooks/useSocialAuth"

const SocialAuth = () => {

  useSocialAuth()

  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <LoaderPage />
    </div>
  )
}

export default SocialAuth