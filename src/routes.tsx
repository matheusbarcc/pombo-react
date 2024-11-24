// eslint-disable-next-line camelcase
import { jwtDecode, JwtPayload } from 'jwt-decode' // Correct named import
import { createBrowserRouter, redirect } from 'react-router-dom'

import { AdminLayout } from './pages/_layouts/admin'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import { ComplaintDetails } from './pages/admin/complaint-details/complaint-details'
import { ReportedPublications } from './pages/admin/reported-publications/reported-publications'
import { Feed } from './pages/app/feed/feed'
import { Profile } from './pages/app/profile/profile'
import { PublicationDetails } from './pages/app/publication-details/publication-details'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

interface CustomJwtPayload extends JwtPayload {
  role: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const requireAuth = (element: any) => {
  const token = localStorage.getItem('pombo-auth-token')
  if (!token) {
    // Redirect to the sign-in page if no token is found
    return redirect('/sign-in')
  }
  return element
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const requireAdminAuth = (element: any) => {
  const token = localStorage.getItem('pombo-auth-token')
  if (!token) {
    return redirect('/sign-in')
  }

  try {
    const decodedToken = jwtDecode<CustomJwtPayload>(token)
    if (decodedToken.role !== 'admin') {
      return redirect('/')
    }
  } catch (error) {
    console.error('Token decoding failed:', error)
    return redirect('/sign-in')
  }

  return element
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: requireAuth(<Feed />) },
      { path: '/profile', element: requireAuth(<Profile />) },
      { path: '/details', element: requireAuth(<PublicationDetails />) },
    ],
  },
  {
    path: '/',
    element: <AdminLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/admin', element: requireAdminAuth(<ReportedPublications />) },
      {
        path: '/admin/details',
        element: requireAdminAuth(<ComplaintDetails />),
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
