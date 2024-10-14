import { Link } from 'react-router-dom'
import { Fastify } from '@/components/svg'

/**
 * Componente que renderiza el header de la aplicación
 * 
 * Utiliza el componente Link de react-router-dom para manejar las rutas
 * Nos permite navegar entre las diferentes páginas de la aplicación
 * 
 * @returns - Renderiza el header
 */
export function Header() {

    return (
        <div className='navbar bg-base-100'>
            <div className='navbar-start'>
                <div className='dropdown'>
                    <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
                    </div>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                        <li>
                            <Link className='py-1 text-base' id='login' to='/'>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link className='py-1 text-base' id='login' to='/login'>
                                Iniciar Sesión
                            </Link>
                        </li>
                        <li>
                            <Link className='py-1 text-base' id='Register' to='/Register'>
                                Registrarse
                            </Link>
                        </li>
                    </ul>
                </div>
                <Fastify width={150} height={150} className='btn btn-ghost text-xl' />
            </div>
            <div className='navbar-center hidden lg:flex'>

            </div>
            <div className='navbar-end hidden lg:flex'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link className='py-1 text-base' id='login' to='/'>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link className='py-1 text-base' id='login' to='/login'>
                            Iniciar Sesión
                        </Link>
                    </li>
                    <li>
                        <Link className='py-1 text-base' id='Register' to='/Register'>
                            Registrarse
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}