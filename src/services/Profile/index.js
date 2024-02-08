import { put, get } from '../index'
import { setAuthorizationToken } from '../index'

const updateProfile = async (user) => {
    try {
        const { id } = user

        const body = await put(`profiles/${id}/update`, user)
    
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

const getProfile = async (id) => {
    try {
        setAuthorizationToken(localStorage.getItem('token'))

        const body = await get(`profiles/get/${id}`)

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

export { updateProfile, getProfile }