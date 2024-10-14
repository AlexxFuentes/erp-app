import { SidebarMenu } from '@/components/sidebar/menu'
import { SidebarFooter } from '@/components/sidebar/footer'
import { Link } from 'react-router-dom'
import { Fastify } from '@/components/svg'

interface Props {
    sideBarActiveItemID: string;
}

export function Sidebar({ sideBarActiveItemID }: Props) {
    return (
        <div className='drawer-side z-40'>
            <label htmlFor='my-drawer' className='drawer-overlay'></label>
            <aside className='px-2 pt-2 h-auto min-h-full w-[19rem] bg-base-200 text-base-content flex flex-col'>
                <div className='w-fit mx-auto mt-5 mb-6'>
                    <Link to='/home'>
                        <div className='avatar transition ease-in-out hover:scale-[102%] block m-auto'>
                            <div className=''>
                                <Fastify width={150} height={150} className='mask mask-circle'/>
                            </div>
                        </div>
                    </Link>
                </div>
                <SidebarMenu sideBarActiveItemID={sideBarActiveItemID} />
                <SidebarFooter />
            </aside>
        </div>
    )
}