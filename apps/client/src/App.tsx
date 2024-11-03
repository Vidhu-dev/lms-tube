import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error, Button } from '@repo/ui'
import AppLayout from './layouts/AppLayout'
import LandingPageLayout from './features/landing page/LandingPageLayout'
import Login from './features/auth/Login'
import Signup from './features/auth/Signup'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPageLayout />,
    },
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/signup',
          element: <Signup />,
        },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
