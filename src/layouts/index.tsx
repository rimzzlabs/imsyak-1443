import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { Outlet } from 'react-router-dom'

const LayoutMain = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className='layout'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default LayoutMain
