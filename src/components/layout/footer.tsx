
export function Footer () {
    const today = new Date();

    return (
        <footer className='footer footer-center block pt-10'>
            <div className='inline opacity-75'>
                <span className='text-sm'>Proyecto Final</span>
            </div>
            <div className='pb-2 text-gray-500'>
                &copy; {today.getFullYear()} ERP ⚡️
            </div>
        </footer>
    )
}