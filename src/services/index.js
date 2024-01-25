import axios from 'axios'

const token = localStorage.getItem('token')
const apiUrl = process.env.REACT_APP_API_URL

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
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

export { get, post, put, del }
