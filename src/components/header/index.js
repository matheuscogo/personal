import React from 'react'
import { map, isEmpty } from 'lodash'
import LinkRoute from '../../components/router'

import { Typography, Grid, Box, Divider } from '@mui/material'

const Header = (props) => {
  const { linkRoute, header } = props

  return (
    <Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h1" component="h2">
            {header}
          </Typography>
        </Grid>
      </Grid>
      {isEmpty(linkRoute) ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {map(linkRoute, (value, key) => {
            return (
              <Grid item>
                <LinkRoute to={value.to}>value.name</LinkRoute>
              </Grid>
            )
          })}
        </Grid>
      ) : (
        <></>
      )}
      <Divider style={{ margin: 16 }}></Divider>
    </Box>
  )
}

export default Header
