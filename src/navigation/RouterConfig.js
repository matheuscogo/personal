import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/HomePage'
import Profile from '../pages/ProfilePage'
import { HOME, PROFILE } from '../navigation/CONSTANTS'

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        <Route exact path={HOME} element={<Home />} />
        <Route exact path={PROFILE} element={<Profile />} />
      </Routes>
    </div>
  )
}
