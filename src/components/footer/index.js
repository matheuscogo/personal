import React from 'react'
import { Typography, AppBar, Link, Toolbar, IconButton } from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = (props) => {
  const { footer } = props

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="subtitle1" style={{ flexGrow: 1 }}>
          {footer}
        </Typography>
        <Link href="#" color="inherit" underline="none" target="_blank">
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
        </Link>
        <Link href="#" color="inherit" underline="none" target="_blank">
          <TwitterIcon />
        </Link>
        <Link href="#" color="inherit" underline="none" target="_blank">
          <FacebookIcon />
        </Link>
        <Link href="#" color="inherit" underline="none" target="_blank">
          <LinkedInIcon />
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
