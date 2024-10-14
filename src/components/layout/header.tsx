
import UseAnimations from 'react-useanimations'
import menu from 'react-useanimations/lib/menu'

export function Header() {
    return (
        // lg:hidden
        <div className='sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm'>
            <div className='navbar'>
                <div className='navbar-start'>
                    <label htmlFor='my-drawer' className='btn btn-square btn-ghost'>
                    <UseAnimations
                        animation={menu}
                        size={24}
                        strokeColor='white'
                    />
                    </label>
                </div>
                <div className='navbar-center'>
                    <a className='btn btn-ghost normal-case lg:text-xl' href='/'>Erp ⚡️</a>
                </div>
                <div className='navbar-end'>
                </div>
            </div>
        </div>
    )
}