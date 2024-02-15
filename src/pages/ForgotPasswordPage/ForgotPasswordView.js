import React from 'react'
import {
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
} from '@mui/material'
import { observer, inject } from 'mobx-react'
import { provider } from '../../components/store/provider'

import formForgotPasswordStore from './store/formForgotPasswordStore'
import { useNavigate } from 'react-router-dom'

const ForgotPasswordView = inject('formForgotPasswordStore')(
  observer((props) => {
    const navigate = useNavigate()

    const { formForgotPasswordStore } = props
    const { getFormData } = formForgotPasswordStore
    const { changeData } = formForgotPasswordStore
    const { to } = getFormData

    const onChange = (name, value) => {
      changeData(name, value)
    }

    const send =  async () => {
      const { submit, setAsPost } = formForgotPasswordStore

      try {
        setAsPost()
        await submit()
        navigate('/')
      } catch (error) {
        console.error('teste')
      }
    }

    return (
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Card>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <Typography variant="h5" align="center" gutterBottom>
                      Digite seu email para redefinir a senha
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label={to.label}
                      name="to"
                      error={to.error}
                      helperText={to.helperText}
                      fullWidth
                      required={to.required}
                      value={to.value}
                      onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={send}
                    >
                      Enviar
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    )
  })
)
export default provider({ formForgotPasswordStore })(ForgotPasswordView)
