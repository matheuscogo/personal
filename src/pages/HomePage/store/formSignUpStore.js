import FormStore from '../../../components/form/store/FormStore'

class FormSignUpStore extends FormStore {
  constructor() {
    super({
      initialData: {
        name: {
          value: '',
        },
        email: {
          value: '',
        },
        password: {
          value: '',
        },
        confirmPassword: {
          value: '',
        },
      },
    })
  }
}

export default new FormSignUpStore