import { Sidebar } from '@/components/sidebar/sidebar'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

interface Props {
    children: React.ReactNode;
    sideBarActiveItemID: string;
}

export function Layout({ children, sideBarActiveItemID }: Props) {

    return (
        // lg:drawer-open
        <div className='bg-base-100 drawer'>
            <input id='my-drawer' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content bg-base-100 lg:h-full'>
                <Header />
                <div className='md:flex md:justify-center lg:h-full'>
                    <main className='p-6 pt-5 lg:max-w-7xl max-w-full'>
                        {children}
                    </main>
                </div>
                <Footer />
            </div>
            <Sidebar sideBarActiveItemID={sideBarActiveItemID} />
        </div>
    )
}