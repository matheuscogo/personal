import FormStore from '../../../components/form/store/FormStore'
import { login } from '../../../services/User'
class FormLoginStore extends FormStore {
  constructor() {
    super({
      initialData: {
        username: {
          label: 'Usuário',
          value: '',
          required: true,
        },
        password: {
          label: 'Senha',
          value: '',
          required: true,
          minLength: 8,
        },
      },
    })

    this.services = {
      post: login
    }
  }
}

export default new FormLoginStore