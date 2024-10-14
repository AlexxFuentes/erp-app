import { Layout } from '@/components/layout/layout'

export function Home() {

    return (
        <Layout sideBarActiveItemID='home'>
            <h1 className='text-4xl text-center font-semibold'>Inicio</h1>

            <h1 className='text-2xl font-semibold'>Inicio</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <h1>pagina despues de iniciar sesión</h1>
            </div>
        </Layout>
    )
}