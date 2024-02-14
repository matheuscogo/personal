import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RouterConfig } from './navigation/RouterConfig'
import './App.css'

import Footer from './components/footer'
import GlobalSnackbar from './components/snackbar'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <RouterConfig />
          <Footer footer="Personal" />
        </BrowserRouter>
        <GlobalSnackbar/>
      </div>
    </>
  )
}

export default App
