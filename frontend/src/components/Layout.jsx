import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <div className={['pt-[4.5rem] sm:pt-[5.5rem] lg:pt-[6.5rem]', isHome ? 'home-page' : 'content-page'].join(' ')}>
        <Outlet />
      </div>
    </div>
  )
}
