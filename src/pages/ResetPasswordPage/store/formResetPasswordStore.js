import FormStore from '../../../components/form/store/FormStore'
import { resetPassword } from '../../../services/Password'

class FormResetPasswordStore extends FormStore {
  constructor() {
    super({
      initialData: {
        code: {
          value: '',
          required: true
        },
        email: {
          value: '',
          required: true,
        },
        newPassword: {
          label: 'Senha',
          value: '',
          required: true,
          password: true,
          minLength: 8,
        },
        confirmPassword: {
          label: 'Confirmação de senha',
          value: '',
          required: true,
          password: true,
          minLength: 8,
        },
      },
    })

    this.services = {
      post: resetPassword
    }
  }
}

export default new FormResetPasswordStore