import React, { useState } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'

import { VisibilityOff, Visibility } from '@mui/icons-material/'
const Password = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const { id, name, label } = props

  return (
    <TextField
      id={id}
      name={name}
      label={label}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={handleTogglePasswordVisibility}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  )
}

export default Password
