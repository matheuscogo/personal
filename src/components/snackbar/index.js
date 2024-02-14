import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const GlobalSnackbar = () => {
  const CustomSnackbar = ({
    open,
    message,
    severity,
    handleClose,
    anchorOrigin,
  }) => {
    return (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MuiAlert elevation={6} variant="filled" severity={severity}>
          {message}
        </MuiAlert>
      </Snackbar>
    )
  }

  const [snackbarConfig, setSnackbarConfig] = useState({
    open: false,
    message: '',
    severity: 'success',
  })

  const showSnackbar = (message, severity) => {
    setSnackbarConfig({
      open: true,
      message,
      severity,
    })
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackbarConfig((prevConfig) => ({
      ...prevConfig,
      open: false,
    }))
  }

  // Expondo a função globalmente
  window.snackbar = showSnackbar

  return (
    <CustomSnackbar
      open={snackbarConfig.open}
      message={snackbarConfig.message}
      severity={snackbarConfig.severity}
      handleClose={handleSnackbarClose}
    />
  )
}

export default GlobalSnackbar
