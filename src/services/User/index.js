import { post } from '../index'

const login = async (user) => {
  try {
    const customConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = await post('users/auth/login', customConfig, user)

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

const signUp = async (user) => {
  try {
    const customConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = await post('users/sign-up', customConfig, user)

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
