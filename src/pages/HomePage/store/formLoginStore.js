import FormStore from '../../../components/form/store/FormStore'
import { login } from '../../../services/User'
class FormLoginStore extends FormStore {
  constructor() {
    super({
      initialData: {
        username: {
          label: 'Usuário',
          value: '',
        },
        password: {
          label: 'Senha',
          value: '',
        },
      },
    })

    this.services = {
      post: login
    }
  }
}

export default new FormLoginStore