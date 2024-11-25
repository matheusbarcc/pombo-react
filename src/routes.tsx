import { createBrowserRouter } from 'react-router-dom'

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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Feed /> },
      { path: '/profile/:userId', element: <Profile /> },
      { path: '/details/:publicationId', element: <PublicationDetails /> },
    ],
  },
  {
    path: '/',
    element: <AdminLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/admin', element: <ReportedPublications /> },
      { path: '/admin/details', element: <ComplaintDetails /> },
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
