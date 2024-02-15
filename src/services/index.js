import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: apiUrl,
})

instance.interceptors.response.use(
  (response) => {
      return response
    },
    (error) => {
      return error.response
  }
)

const get = async (endpoint, snackbar) => {
  try {
    const { data }  = await instance.get(endpoint)

    const { success, message } = data

    if (!success) {
      throw message
    }

    if(snackbar){
      window.snackbar(message, 'success');
    }

    return data
  } catch (e) {
    window.snackbar(e, 'error');
  }
}

const post = async (endpoint, body, snackbar) => {
  try {
    const { data } = await instance.post(endpoint, body)

    const { success, message } = data
    
    if (!success) {
      throw message
    }

    if(snackbar){
      window.snackbar(message, 'success');
    }

    return data
  } catch (e) {
    window.snackbar(e, 'error');
  }
}

const put = async (endpoint, body, snackbar) => {
  try {
    const { data }  = await instance.put(endpoint, body)

    const { success, message } = data

    if (!success) {
      throw message
    }

    if(snackbar){
      window.snackbar(message, 'success');
    }

    return data
  } catch (e) {
    window.snackbar(e, 'error');
  }
}

const del = async (endpoint, snackbar) => {
  try {
    const { data }  = await instance.get(endpoint)

    const { success, message } = data

    if (!success) {
      throw message
    }

    if(snackbar){
      window.snackbar(message, 'success');
    }

    return data
  } catch (e) {
    window.snackbar(e, 'error');
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
