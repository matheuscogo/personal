import { makeObservable, observable, action } from 'mobx'
import { mapValues, cloneDeep } from 'lodash'
import { isFunction, isEmpty, get, set } from 'lodash'

class FormStore {
  constructor({ endpoint, initialData }) {
    this.setInitialStates = this.setInitialStates.bind(this)
    this.submit = this.submit.bind(this)

    this.endpoint = endpoint
    this.services = {}
    this.formStates = {}
    this.datagrid = {
       columns: [],
       rows: [],
    }
    this.loading = false
    this.id = null

    makeObservable(this, {
      // init: action,
      setInitialStates: action,
      submit: action,
      getFormData: observable,
      services: observable,
      loading: observable,
      id: observable,
      formStates: observable,
    })

    this.init(initialData)
  }

  init(initialData) {
    this.setInitialStates(initialData)
  }

  setInitialStates = (initialData = {}) => {
    initialData = mapValues(initialData, (state) => state)

    const states = mapValues(initialData, (state) => {
      return state
    })

    this.formStates = cloneDeep(states)
    this.getFormData = cloneDeep(states)
  }

  fetchData = async () => {
    if (isFunction(this.endpoint)) {
      if (isEmpty(this.datagrid.rows)) {
        this.loading = true
        try {
          const response = await this.endpoint()
          this.datagrid.rows = response
        } catch (e) {
          throw e
        } finally {
          this.loading = false
        }
      }
    }
  }

  submit = async () => {
    console.warn('this.services', this.services)
    await this.services.post({username:'matheus', password: '123'})
    if (this.validateForm()) {
      try {
        // Lógica para salvar os dados no servidor
        // Aguarde a conclusão da operação
      } catch (error) {
        console.error('Erro ao salvar dados:', error)
      }
    }
  }

  validateForm = () => {
    // Implemente a lógica de validação aqui
    // Retorne true se válido, false se inválido
    return true
  }

  getFormData = () => {
    return this.formStates
  }

  changeState = (name, value) => {
    set(get(this.getFormData, name), 'value', value)
  }
}

export default FormStore
