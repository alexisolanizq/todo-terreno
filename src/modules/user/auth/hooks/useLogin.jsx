import React from 'react'
import { useLoginQuery } from '../queries/auth.query'
import { useForm } from 'react-hook-form'

const useLogin = () => {

    const { control, handleSubmit, formState: { errors } } = useForm();
    const loginQuery = useLoginQuery()

    const loginGoogle = () => {
        window.location.href = "http://localhost/api/auth/google"
    }

    const loginFacebook = () => {
        window.location.href = "http://localhost/api/auth/facebook"
    }

    const loginApple = () => {
        window.location.href = "http://localhost/api/auth/apple"
    }

    const onSubmit = async (data) => {
        console.log(data);
        loginQuery.mutateAsync(data)
    }

    return {
        errors,
        control,
        onSubmit,
        handleSubmit,

        loginGoogle,
        loginApple,
        loginFacebook,

    }
}

export default useLogin