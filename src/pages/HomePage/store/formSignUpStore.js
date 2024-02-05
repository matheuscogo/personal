import FormStore from '../../../components/form/store/FormStore'
import { signUp } from '../../../services/User'

class FormSignUpStore extends FormStore {
  constructor() {
    super({
      initialData: {
        username: {
          label: 'Nome de usuário',
          value: '',
          required: true
        },
        email: {
          label: 'E-mail',
          value: '',
          required: true,
          email: true,
          maxLength: 100,
        },
        password: {
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
      post: signUp
    }
  }
}

export default new FormSignUpStore