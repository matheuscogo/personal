import React, { useState, useEffect } from 'react'
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
import  { provider } from '../../components/store/provider'


import formLoginStore from './store/formLoginStore'
import formSignUpStore from './store/formSignUpStore'

import Password from '../../components/password'

const LoginForm = inject('formLoginStore', 'formSignUpStore')(observer((props) => {

  const { formLoginStore } = props
  const { getFormData: getLoginFormData  } = formLoginStore
  const { username, password } = getLoginFormData  
  
  const { formSignUpStore } = props
  const { getFormData: getSignUpFormData } = formLoginStore
  const { 
    name, 
    email,
    password: signPassword,
    confirmPassword 
} = getSignUpFormData

  useEffect(() => {}, []);

  const onChange = (name, value) =>{
    const { changeState: changeStateLogin } = formLoginStore
    const { changeState: changeStateSignUp } = formSignUpStore

    // Login
    if(name === 'username'){
      changeStateLogin(name, value)
    }    
    
    if(name === 'password'){
      changeStateLogin(name, value)
    }

    // SignUp
    if (name === 'email'){
      changeStateSignUp(name, value)
    }
  }

  const login = () => {
    const { submit } = formLoginStore

    try {
      submit()
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
                        name='username'
                        label= { username.label }
                        variant="outlined"
                        fullWidth
                        size="small"
                        value={ username.value }
                        onChange={ (e) => onChange(e.target.name, e.target.value) }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Password
                        name='password'
                        label={password.label}
                        variant="outlined"
                        fullWidth
                        size="small"
                        value={password.value}
                        onChange={ (e) => onChange(e.target.name, e.target.value) }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={ login }
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
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        size="small"
                        // value={signupName}
                        // onChange={(e) => setSignupName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id='email'
                        name='email'
                        label="Email"
                        variant="outlined"
                        fullWidth
                        size="small"
                        // value={signupEmail}
                        // onChange={(e) => setSignupEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Password
                        label="Senha"
                        variant="outlined"
                        fullWidth
                        size="small"
                        // value={signupPassword}
                        // onChange={(e) => setSignupPassword(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Password
                        label="Confirmação de Senha"
                        variant="outlined"
                        fullWidth
                        size="small"
                        // value={confirmPassword}
                        // onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        // onClick={handleSignup}
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
  export default provider({formLoginStore, formSignUpStore})(LoginForm)