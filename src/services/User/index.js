import { post } from '../index'

const login = async (user) => {
  try {
    const body = await post('users/auth/login', user)

    if (!body.success) {
      throw body.message
    }

    localStorage.setItem('token', body.response)

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
