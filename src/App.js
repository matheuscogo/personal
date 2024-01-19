import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RouterConfig } from './navigation/RouterConfig'
import './App.css'

import Footer from './components/footer'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <RouterConfig />
          <Footer footer="Personal" />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
