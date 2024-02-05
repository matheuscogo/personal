import { post, setAuthorizationToken } from '../index'

const login = async (user) => {
  try {
    // Se o login está sendo feito dnv, devemos limpar o login anterior
    setAuthorizationToken()

    const body = await post('users/auth/login', user)

    if (!body.success) {
      throw body.message
    }

    // Salve o token no localStorage para persistência
    localStorage.setItem('token', body.response)

    // Configure o token na instância do Axios
    setAuthorizationToken(body.response)

    return body
  } catch (e) {
    return {
      success: false,
      message: 'Erro: ' + e,
      response: {},
    }
  }
}

const signUp = async (user) => {
  try {
    // Se o cadastro está sendo feito, devemos 
    // limpar o login, pois o usuário não existe ainda
    setAuthorizationToken()

    const body = await post('users/sign-up', user)

    if (!body.success) {
      throw body.message
    }

    return body
  } catch (e) {
    return {
      success: false,
      message: 'Erro: ' + e,
      response: {},
    }
  }
}

export { login, signUp }
