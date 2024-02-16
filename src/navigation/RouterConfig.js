import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Profile from '../pages/ProfilePage'
import SignUp from '../pages/SignUpPage'
import SignIn from '../pages/SignInPage'
import { HOME, PROFILE, SIGNUP, SIGNIN, HOMEPAGE } from '../navigation/CONSTANTS'

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        {/* <Route exact path={HOME} element={<Home />} /> */}
        <Route exact path={HOMEPAGE} element={<HomePage />} />
        <Route exact path={SIGNIN} element={<SignIn />} />
        <Route exact path={SIGNUP} element={<SignUp />} />
        <Route exact path={PROFILE} element={<Profile />} />
      </Routes>
    </div>
  )
}
