import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/HomePage'
import { HOME } from '../navigation/CONSTANTS'

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        <Route exact path={HOME} element={<Home />} />
      </Routes>
    </div>
  )
}
