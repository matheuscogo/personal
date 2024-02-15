import { post } from '../index'

const resetPassword = async (controls) => {
    try {
        const body = await post(`email/reset-password`, controls, true)
    
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

const sendResetPassword = async (controls) => {
    try {
        const body = await post(`email/send-email`, controls, true)
    
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

export { resetPassword, sendResetPassword }