
import { Email, Password } from '@/components/svg'
import { Input } from '@/components/input'
import { useForm, SubmitHandler } from 'react-hook-form'
import { User } from '@/types/user'
import { Header } from '@/components/header'
import { UseAuth } from '@/context/auth-context'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function Login() {

    const { signin, errors: loginErrors, isAuthenticated } = UseAuth()
    const navigate = useNavigate()
    const [showError, setShowError] = useState<boolean>(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm<User>({
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<User> = (data) => {
        signin(data)
        reset()
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home')
        }
    }, [isAuthenticated, navigate])

    const HandlerShowError = () => {
        setShowError(true);
        setTimeout(() => 
            setShowError(false)
        , 2000)
    };

    return (
        <>
            <Header />

            <div className='h-[calc(100vh-100px)] flex items-center justify-center'>

                <div className='bg-zinc-700 max-w-md w-full p-10 rounded-md'>
                    {
                        loginErrors?.map((error, index) => (
                            <p className='text-slate-200 bg-red-500 py-2 px-3 text-sm rounded-sm mb-1' key={index}>
                                {error}
                            </p>
                        ))
                    }

                    <h2 className='text-center text-2xl font-bold mb-3'>Iniciar Sesión</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
                    
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

                        <button type='submit' onClick={HandlerShowError} className='btn rounded-md'>Iniciar Sesión</button>
                    </form>

                    <p className='flex gap-x-2 justify-between'>
                        ¿No tienes una cuenta?<Link to='/register' className='text-sky-500'>Registrate</Link>
                    </p>
                </div>
            </div>
        </>
    )
} 
