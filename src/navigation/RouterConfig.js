import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/HomePage'
import Profile from '../pages/ProfilePage'
import ForgotPassword from '../pages/ForgotPasswordPage'
import ResetPassword from '../pages/ResetPasswordPage'
import { 
  HOME, 
  PROFILE,
  RESETPASSWORD,
  FORGOTPASSWORD,
} from '../navigation/CONSTANTS'

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        <Route exact path={HOME} element={<Home />} />
        <Route exact path={PROFILE} element={<Profile />} />
        <Route exact path={FORGOTPASSWORD} element={<ForgotPassword />} />
        <Route exact path={RESETPASSWORD} element={<ResetPassword />} />
      </Routes>
    </div>
  )
}
