import { createBrowserRouter } from 'react-router-dom'

import Login from '../Pages/auth/Login'
import ForgetPassword from '../Pages/auth/ForgetPassword'
import ResetPassword from '../Pages/auth/ResetPassword'
import SendOtp from '../Pages/auth/SendOtp'

import AdminRoute from '../ProtectedRoute/AdminRoute'
import Dashboard from '../Pages/layout/Dashboard'
import DashboardHome from '../Pages/dashboardHome/DashboardHome'
import Earnings from '../Pages/earnings/Earnings'
import PrivacyPolicy from '../Pages/privacyPolicy/PrivacyPolicy'
import TermsAndConditions from '../Pages/termsAndConditions/TermsAndConditions'
import Profile from '../Pages/profile/Profile'
import ServiceCategory from '../Pages/serviceCategory/ServiceCategory'
import Client from '../Pages/client/Client'
import Talents from '../Pages/talents/Talents'
import Hiring from '../Pages/hiring/Hiring'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: '/clients',
        element: <Client />,
      },
      {
        path: '/talents',
        element: <Talents />,
      },
      {
        path: '/hiring',
        element: <Hiring />,
      },

      {
        path: '/earnings',
        element: <Earnings />,
      },
      {
        path: '/service-category',
        element: <ServiceCategory />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/terms-and-condition',
        element: <TermsAndConditions />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },
  {
    path: '/send-otp',
    element: <SendOtp />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
])
export default router
