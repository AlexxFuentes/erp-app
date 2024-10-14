import { Navigate, Outlet } from 'react-router-dom'
import { UseAuth } from '@/context/auth-context'
import { Loading } from '@/components/loading'

/**
 * Función que maneja las rutas protegidas
 * 
 * Utiliza el hook UseAuth para verificar si el usuario está autenticado
 * 
 * @returns - Renderiza el componente Outlet si el usuario está autenticado,
 * en caso contrario, redirige a la página de login
 */
export const ProtectedRoute = () => {

    const { isAuthenticated, loading } = UseAuth()

    if (loading) return <Loading />
    if (!loading && !isAuthenticated) return <Navigate to='/login' replace />

    return <Outlet />
}