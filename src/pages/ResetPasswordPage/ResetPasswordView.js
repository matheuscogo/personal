import React, { useEffect, useState } from 'react'
import {
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material'
import { observer, inject } from 'mobx-react'
import { provider } from '../../components/store/provider'
import { decodeBase64 } from '../../utils/Base64';

import formResetPasswordStore from './store/formResetPasswordStore'

import Password from '../../components/password'

const ResetPasswordView = inject('formResetPasswordStore')(
  observer((props) => {
    const [email, setEmail] = useState('') 
    const [code, setCode] = useState('') 
    const [base64, setBase64] = useState('') 

    const { formResetPasswordStore } = props
    const { getFormData } = formResetPasswordStore
    const { changeData } = formResetPasswordStore
    const {
      newPassword,
      confirmPassword
    } = getFormData

    useEffect(() => {
      setBase64(decodeBase64())
    }, [])

    useEffect(() => {
      setEmail(base64.email)
      setCode(base64.code)
    }, [base64])

    const onChange = (name, value) => {
      changeData(name, value)
      }

    const send = async () => {
      const { submit, setAsPost } = formResetPasswordStore
      changeData('email', email)
      changeData('code', code)

      try {
        setAsPost()
        await submit()

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
                    Redefinir senha para {email}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Password
                    label={newPassword.label}
                    name="newPassword"
                    error={newPassword.error}
                    helperText={newPassword.helperText}
                    fullWidth
                    required={newPassword.required}
                    value={newPassword.value}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Password
                    label={confirmPassword.label}
                    name="confirmPassword"
                    fullWidth
                    error={confirmPassword.error}
                    helperText={confirmPassword.helperText}
                    required={confirmPassword.required}
                    value={confirmPassword.value}
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
                    Restaurar
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
export default provider({ formResetPasswordStore })(ResetPasswordView)
