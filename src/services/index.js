import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: apiUrl,
})

const get = async (endpoint, body) => {
  try {
    const { data } = await instance.get(endpoint)

    const { success } = data

    if (!success) {
      throw data
    }

    return data
  } catch (e) {
    console.error(e)
    return e
  }
}

const post = async (endpoint, body) => {
  try {
    const { data } = await instance.post(endpoint, body)

    const { success } = data

    if (!success) {
      throw data
    }

    return data
  } catch (e) {
    console.error(e.message)
    return e
  }
}

const put = async (endpoint, body) => {
  try {
    const { data } = await instance.put(endpoint, body)

    const { success } = data

    if (!success) {
      throw data
    }

    return data
  } catch (e) {
    console.error(e)
    return e
  }
}

const del = async (endpoint, body) => {
  try {
    const { data } = await instance.delete(endpoint)

    const { success } = data

    if (!success) {
      throw data
    }

    return data
  } catch (e) {
    console.error(e)
    return e
  }
}

const setAuthorizationToken = (token) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete instance.defaults.headers.common['Authorization']
  }
}

export { get, post, put, del, setAuthorizationToken }
