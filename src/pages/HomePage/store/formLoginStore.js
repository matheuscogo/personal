import FormStore from '../../../components/form/store/FormStore'

export default class FormLoginStore extends FormStore {
  constructor() {
    super({
      initialData: {
        username: {
          value: '',
        },
        password: {
          value: '',
        },
      },
    })
  }
}
