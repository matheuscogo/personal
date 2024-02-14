import FormStore from '../../../components/form/store/FormStore'
import { sendResetPassword } from '../../../services/Password'

class FormForgotPasswordStore extends FormStore {
  constructor() {
    super({
      initialData: {
        to: {
          label: 'E-mail',
          value: '',
          required: true,
          email: true,
        },
      },
    })

    this.services = {
      post: sendResetPassword
    }
  }
}

export default new FormForgotPasswordStore