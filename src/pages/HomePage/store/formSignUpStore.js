import FormStore from '../../../components/form/store/FormStore'

export default class FormSignUpStore extends FormStore {
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
