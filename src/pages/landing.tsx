import { Link } from 'react-router-dom'

export function Landing() {

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-base-200'>
            
            <h1 className='text-4xl font-bold text-center'>Bienvenido</h1>
            <p className='text-lg text-center'>Página de inicio</p>


            <div className='flex gap-4 mt-8'>
                <Link to='/login' className='btn btn-primary'>Iniciar Sesión</Link>
                <Link to='/register' className='btn btn-secondary'>Registrarse</Link>
            </div>

        </div>
    )
} 