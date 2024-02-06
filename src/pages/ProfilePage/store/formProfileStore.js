import FormStore from '../../../components/form/store/FormStore'
import { getProfile } from '../../../services/Profile'

class FormProfileStore extends FormStore {
  constructor() {
    super({
      initialData: {
        username: {
          label: 'Nome de usuário',
          value: '',
        },
        email: {
          label: 'E-mail',
          value: '',
        },
        foto: {
          label: 'Foto',
          value: '',
        },
        numeroTelefone: {
          label: 'Número de telefone',
          value: '',
        },
        observacao: {
          label: 'Obersevação',
          value: '',
        },
        objetivo: {
          label: 'Objetivo',
          value: '',
        },
      },
    })

    this.services = {
      get: getProfile
    }
  }
}

export default new FormProfileStore