import { put, get } from '../index'

const updateMetric = async (user) => {
    try {
        const { id } = user

        const body = await put(`user-metrics/${id}/update`, user)
    
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

const getMetric = async (id) => {
    try {
        const body = await get(`user-metrics/${id}/get`)
    
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

export { updateMetric, getMetric }