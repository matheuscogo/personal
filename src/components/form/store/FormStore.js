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
    if (this.validateForm()) {

    const object =  mapValues(this.getFormData, (value) => {
      return get(value, 'value')
    })

      try {
        if(isFunction(this.services.post)){
          await this.services.post(object)
        }
        
        if(isFunction(this.services.put)){
          await this.services.put(object)
        }
        // Lógica para salvar os dados no servidor
        // Aguarde a conclusão da operação
      } catch (error) {
        console.error('Erro ao salvar dados:', error)
      }
    }
  }

  validateForm = () => {
    mapValues(this.getFormData, (value, key) =>{
      // rules for required
      if(value.required && isEmpty(value.value)) {
        set(get(this.getFormData, key), 'error', true)
        return false
      }
      
      // rules for email
      if(value.email && !isEmpty(value.value)) {
        // Validamos a quantidade de caracteres maxima
        const maxEmailLength = value.value.length <= value.maxLength
        if(maxEmailLength){
          set(get(this.getFormData, key), 'helperText', "O e-mail é muito longo. Por favor, mantenha-o abaixo de " + value.maxLength + " caracteres.")
          return false
        }
        
        // Validamos se é um email valido
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(!emailRegex.test(value.value)){
          set(get(this.getFormData, key), 'helperText', "O e-mail invalido.")
          set(get(this.getFormData, key), 'error', true)
          return false
        }
      }

      // Rules for password
      if(value.password && !isEmpty(value.value)){
        // Validamos sa quantidade de caracteres minima
        const minPasswordLength = value.value.length >= value.minLength
        if(!minPasswordLength){
          set(get(this.getFormData, key), 'helperText', "A senha deve ter no mínimo " + value.minLength + " caracteres.")
          set(get(this.getFormData, key), 'error', true)
          return false
        }

      }
    })

    return true
  }

  getFormData = () => {
    return this.formStates
  }

  changeData = (name, value) => {
    if(get(get(this.getFormData, name), 'error')){
      set(get(this.getFormData, name), 'error', false)
      set(get(this.getFormData, name), 'helperText', '')
    }

    set(get(this.getFormData, name), 'value', value)
  }
}

export default FormStore
