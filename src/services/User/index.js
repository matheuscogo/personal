import { post, setAuthorizationToken } from '../index'
import { jwtDecode } from "jwt-decode";

const login = async (user) => {
  try {
    // Se o login está sendo feito dnv, devemos limpar o login anterior
    setAuthorizationToken()

    const body = await post('users/auth/login', user, true)

    if (!body.success) {
      throw body.message
    }

    // Consulta o ID do usuário no JWT
    const { userId }  = jwtDecode(body.response)

    // Salve os dados no localStorage para persistência
    localStorage.setItem('token', body.response)
    localStorage.setItem('userId', userId)

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
