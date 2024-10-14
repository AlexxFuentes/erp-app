import { Input } from '@/components/input'
import { useForm, SubmitHandler } from 'react-hook-form'
import { User } from '@/types/user'
import { UseAuth } from '@/context/auth-context'
import { useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Email, Password, User as UserIcon } from '@/components/svg'
import { Header } from '@/components/header'

export function Register() {
    const { signup, errors: registerErrors, isAuthenticated } = UseAuth()
    const navigate = useNavigate()
    const [showError, setShowError] = useState<boolean>(false)
    const [isMatch, setIsMatch] = useState<boolean>(false)
    const [isPassword, setIsPassword] = useState<boolean>(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm<User>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<User> = (data) => {

        if (data.password !== data.passwordConfirm) {
            setIsPassword(true)
            setTimeout(() =>
                setIsPassword(false)
                , 2000)
            return
        }

        const match = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(data.password)
        if (!match) {
            setIsMatch(true)
            setTimeout(() =>
                setIsMatch(false)
            , 4000)
            return
        }

        signup(data)
        reset()
    }

    const HandlerShowError = () => {
        setShowError(true);
        setTimeout(() =>
            setShowError(false)
            , 2000)
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home')
        }
    }, [isAuthenticated, navigate])

    return (
        <>
            <Header />

            <div className='h-[calc(100vh-100px)] flex items-center justify-center'>

                <div className='bg-zinc-700 max-w-md w-full p-10 rounded-md'>

                    {
                        registerErrors?.map((error, index) => (
                            <p className='text-slate-200 bg-red-400 py-2 px-3 text-sm rounded-sm mb-1' key={index}>
                                {error}
                            </p>
                        ))
                    }

                    <h2 className='text-center text-2xl font-bold mb-3'>Registro</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>

                        <Input<User>
                            icon={<UserIcon />}
                            label='name'
                            register={register}
                            type='text'
                            placeholder='Nombre Completo'
                            required
                        />
                        {
                            showError && errors.name?.message && <p className='text-red-500'>Este campo es requerido</p>
                        }

                        <Input<User>
                            icon={<Email />}
                            label='email'
                            register={register}
                            type='email'
                            placeholder='Correo Electrónico'
                            required
                        />
                        {
                            showError && errors.email?.message && <p className='text-red-500'>Este campo es requerido</p>
                        }

                        <Input<User>
                            icon={<Password />}
                            label='password'
                            register={register}
                            type='password'
                            placeholder='Contraseña'
                            required
                        />
                        {
                            showError && errors.password?.message && <p className='text-red-500'>Este campo es requerido</p>
                        }

                        <Input<User>
                            icon={<Password />}
                            label='passwordConfirm'
                            register={register}
                            type='password'
                            placeholder='Confirmar Contraseña'
                            required
                        />
                        {
                            showError && errors.passwordConfirm?.message && <p className='text-red-500'>Este campo es requerido</p>
                        }
                        {
                            isMatch && <p className='text-red-500'>La Contraseña debe tener al menos una letra mayúscula, al menos un número y al menos un caracter especial.</p>
                        }
                        {
                            isPassword && <p className='text-red-500'>Las contraseñas no coinciden.</p>
                        }

                        <button type='submit' onClick={HandlerShowError} className='btn rounded-md'>Registrarse</button>
                    </form>
                    <p className='flex gap-x-2 justify-between'>
                        ¿Tienes una cuenta?<Link to='/login' className='text-sky-500'>Inicia sesión</Link>
                    </p>
                </div>
            </div>
        </>
    )
}