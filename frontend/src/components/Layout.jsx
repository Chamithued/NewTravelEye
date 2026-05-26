import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen overflow-x-clip bg-slate-50 text-slate-900">
      <Navbar />
      <Outlet />
    </div>
  )
}
