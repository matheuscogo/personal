import React, { useEffect } from 'react'
import {
  TextField,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
} from '@mui/material'
import { observer, inject } from 'mobx-react'
import { provider } from '../../components/store/provider'

import formLoginStore from './store/formLoginStore'
import formSignUpStore from './store/formSignUpStore'

import Password from '../../components/password'

const LoginForm = inject(
  'formLoginStore',
  'formSignUpStore'
)(
  observer((props) => {
    const { formLoginStore } = props
    const { getFormData: getLoginFormData } = formLoginStore
    const { username, password } = getLoginFormData

    const { formSignUpStore } = props
    const { getFormData: getSignUpFormData } = formSignUpStore
    const {
      username: signUsername,
      email,
      password: signPassword,
      confirmPassword,
    } = getSignUpFormData

    useEffect(() => {}, [])

    const onChange = (name, value) => {
      const { changeData: changeDataLogin } = formLoginStore
      const { changeData: changeDataSignUp } = formSignUpStore

      // Login
      if (name === 'username') {
        changeDataLogin(name, value)
      }
      if (name === 'password') {
        changeDataLogin(name, value)
      }

      // SignUp
      if (name === 'signUsername') {
        changeDataSignUp('username', value)
      }
      if (name === 'email') {
        changeDataSignUp(name, value)
      }
      if (name === 'signPassword') {
        changeDataSignUp('password', value)
      }
      if (name === 'confirmPassword') {
        changeDataSignUp(name, value)
      }
    }

    const login = async () => {
      const { submit, setAsPost } = formLoginStore

      try {
        setAsPost()
        await submit()

      } catch (error) {
        console.error('teste')
      }
    }

    const signUp = async () => {
      const { submit, setAsPost } = formSignUpStore

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
                      Login
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="username"
                      error={username.error}
                      label={username.label}
                      required={username.required}
                      value={username.value}
                      onChange={(e) => onChange(e.target.name, e.target.value)}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Password
                      name="password"
                      error={password.error}
                      helperText={password.helperText}
                      label={password.label}
                      required={password.required}
                      value={password.value}
                      onChange={(e) => onChange(e.target.name, e.target.value)}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={login}
                    >
                      Entrar
                    </Button>
                  </Grid>

                  {/* Formulário de Cadastro */}
                  <Grid item xs={12}>
                    <Typography variant="h5" align="center" gutterBottom>
                      Cadastro
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="signUsername"
                      error={signUsername.error}
                      label={signUsername.label}
                      required={signUsername.required}
                      value={signUsername.value}
                      onChange={(e) => onChange(e.target.name, e.target.value)}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      error={email.error}
                      helperText={email.helperText}
                      label={email.label}
                      required={email.required}
                      value={email.value}
                      inputProps={{ maxLength: email.maxLength }}
                      onChange={(e) => onChange(e.target.name, e.target.value)}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Password
                      name="signPassword"
                      error={signPassword.error}
                      label={signPassword.label}
                      helperText={signPassword.helperText}
                      required={signPassword.required}
                      value={signPassword.value}
                      onChange={(e) => onChange(e.target.name, e.target.value)}
                      inputProps={{ minLength: signPassword.minLength }}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Password
                      name="confirmPassword"
                      error={confirmPassword.error}
                      label={confirmPassword.label}
                      helperText={confirmPassword.helperText}
                      required={confirmPassword.required}
                      value={confirmPassword.value}
                      onChange={(e) => onChange(e.target.name, e.target.value)}
                      inputProps={{ minLength: confirmPassword.minLength }}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={signUp}
                    >
                      Cadastrar
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={6}
            lg={8}
            style={{ height: '50vh', overflow: 'hidden' }}
          >
            <Paper
              variant="outlined"
              style={{
                padding: 16,
                margin: 16,
                textAlign: 'center',
                border: 'none',
                height: '100%',
              }}
            >
              {/* Adicione a URL da sua imagem no src */}
              <img
                src="https://images-ext-1.discordapp.net/external/7N4tRlirN5T1iApAoISSoJRNBf74sQsbmwsPu-Z2i_8/https/wallpapercave.com/wp/wp9402650.jpg?format=webp&width=380&height=676"
                alt="Imagem"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    )
  })
)
// export default LoginForm
export default provider({ formLoginStore, formSignUpStore })(LoginForm)
