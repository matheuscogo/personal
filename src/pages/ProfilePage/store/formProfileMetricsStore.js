import FormStore from '../../../components/form/store/FormStore'
import { getMetric, updateMetric } from '../../../services/Metric'

class FormProfileMetricsStore extends FormStore {
  constructor() {
    super({
      initialData: {
        dataStart: {
          label: 'Data de Inicio',
          value: '',
        },
        weight: {
          label: 'Peso',
          value: '',
        },
        height: {
          label: 'Altura',
          value: '',
        },
        age: {
          label: 'Idade',
          value: '',
        },
        tronco: {
          label: 'Tronco',
          value: '',
        },
        quadril: {
          label: 'Quadril',
          value: '',
        },
        bracoEsquerdo: {
          label: 'Braco Esquerdo',
          value: '',
        },
        bracoDireito: {
            label: 'Braco Direito',
            value: '',
        },
        PernaEsquerda: {
            label: 'Perna Esquerda',
            value: '',
        },
        pernaDireita: {
            label: 'Perna Direita',
            value: '',
        },
        panturrilhaEsquerda: {
            label: 'Panturrilha Esquerda',
            value: '',
        },
        panturrilhaDireita: {
            label: 'Panturrilha Direita',
            value: '',
        },
      },
    })

    this.services = {
      get: getMetric
    }
  }
}

export default new FormProfileMetricsStore