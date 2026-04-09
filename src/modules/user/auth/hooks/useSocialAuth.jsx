import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authStorage } from "src/utils/localStorage";

const useSocialAuth = () => {

    const [params] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = params.get("token")

        if (!token) return

        authStorage.setToken(token)

        navigate('/')
    }, [])


    return {

    }
}

export default useSocialAuth