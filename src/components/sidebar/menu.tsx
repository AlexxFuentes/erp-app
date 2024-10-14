/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect } from 'react'
import UseAnimations from 'react-useanimations'
import home from 'react-useanimations/lib/home'
import folder from 'react-useanimations/lib/folder'
import settings from 'react-useanimations/lib/settings'
import { Link } from 'react-router-dom'

interface Props {
    sideBarActiveItemID: string;
}

/**
 * Componente SidebarMenu
 * @description Renderiza el menú del sidebar
 * @param param0 - sideBarActiveItemID: string - ID del item activo en el sidebar
 */
export function SidebarMenu({ sideBarActiveItemID }: Props) {

    useEffect(() => {
        const activeItem = document.getElementById(sideBarActiveItemID);
        activeItem && activeItem.classList.add('bg-base-300');
    }, [sideBarActiveItemID]);

    return (
        <ul className='menu grow shrink menu-md overflow-y-auto text-white'>
            <li>
                <Link className='py-3 text-base' id='home' to='/home'>
                    <UseAnimations
                        animation={home}
                        size={24}
                        strokeColor='white'
                    />
                    Inicio
                </Link>
            </li>
            <li>
                <Link className='py-3 text-base' id='projects' to='/projects'>
                    <UseAnimations
                        animation={folder}
                        size={24}
                        strokeColor='white'
                    />
                    Pedido de ventas
                </Link>
            </li>
            <li>
                <Link className='py-3 text-base' id='projects' to='/projects'>
                    <UseAnimations
                        animation={folder}
                        size={24}
                        strokeColor='white'
                    />
                    Facturas de ventas
                </Link>
            </li>
            <li>
                <Link className='py-3 text-base' id='settings' to='/settings'>
                    <UseAnimations
                        animation={settings}
                        size={24}
                        strokeColor='white'
                    />
                    Configuración
                </Link>
            </li>
        </ul>
    )
}