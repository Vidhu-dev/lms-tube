import { Outlet } from 'react-router-dom'
import Footer from './Footer'

import Header from './Header'
import Sidebar from './Sidebar'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import HeaderTemp from './HeaderTemp'
function AppLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="min-h-screen flex flex-col">
      {isLoggedIn ? <Header /> : <HeaderTemp/>}
      {isLoggedIn && <Sidebar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster toastOptions={{ position: 'top-right' }} />
    </div>
  )
}

export default AppLayout
