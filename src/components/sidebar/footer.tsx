import { Link } from 'react-router-dom'
import { UseAuth } from '@/context/auth-context'
import UseAnimations from 'react-useanimations'
import home from 'react-useanimations/lib/lock'

export function SidebarFooter() {

    const { logout } = UseAuth()

    return (
        <div className='block sticky bottom-10 bg-base-200 justify-center h-12 [mask-image:linear-gradient(transparent,#000000)]'>
            <div className='social-icons px-4 pb-5 pt-1 flex self-center justify-center sticky bottom-0 bg-base-200'>
                <Link to='/login' onClick={() => logout()} className='mx-3 flex gap-3' aria-label='logout' title='logout'>
                    <UseAnimations
                        animation={home}
                        size={24}
                        strokeColor='white'
                    />
                    Cerrar sesión
                </Link>
            </div>
        </div>
    )
}