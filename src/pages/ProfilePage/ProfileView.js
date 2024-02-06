import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import { observer, inject } from 'mobx-react'
import { provider } from '../../components/store/provider'
import formProfileStore from './store/formProfileStore'
import formProfileMetricsStore from './store/formProfileMetricsStore'
import { Card, CardContent, Avatar, Grid, Divider } from '@mui/material'
import moment from 'moment'

const ProfileForm = inject(
  'formProfileStore',
  'formProfileMetricsStore'
)(
  observer((props) => {
    const { formProfileStore, formProfileMetricsStore } = props

    useEffect(() => {
      const { fetchFormData: fetchProfileData } = formProfileStore
      const { fetchFormData: fetchMetricsData } = formProfileMetricsStore

      fetchProfileData()
      fetchMetricsData()
    }, [])

    const { getFormData: getProfileData } = formProfileStore

    const { username, email, foto, numeroTelefone, observacao, objetivo } = getProfileData

    const { getFormData: getProfileMetricsData } = formProfileMetricsStore

    const { 
      dataStart, 
      weight, 
      height, 
      age, 
      tronco, 
      quadril, 
      bracoEsquerdo, 
      bracoDireito, 
      PernaEsquerda, 
      pernaDireita, 
      panturrilhaEsquerda, 
      panturrilhaDireita 
    } = getProfileMetricsData

    return (
      <Grid container spacing={3} direction="column" alignItems="center">
      {/* Foto do perfil à esquerda */}
      <Grid item>
        <Avatar alt="User Avatar" src="https://conteudo.imguol.com.br/c/entretenimento/f1/2021/03/03/kleber-bambam-diz-que-ja-ficou-com-11-ex-bbbs-1614808930731_v2_450x600.jpg" sx={{ width: 150, height: 150 }} />
      </Grid>

      {/* Cards com informações do usuário e métricas do corpo à direita */}
      <Grid item container spacing={2} justifyContent="center" alignItems="flex-start">
        {/* Card com informações do usuário */}
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="h6">{ username.value }</Typography>
              <Typography>Email: { email.value }</Typography>
              <Typography>Número telefone: { numeroTelefone.value }</Typography>
              <Typography>Idade: {age.value} anos</Typography>
              <Typography>Inicio Academia: { moment(dataStart.value).format("DD/MM/YYYY") }</Typography>
              <Typography>Objetivo na Academia: { objetivo.value }</Typography>
              <Typography>Observações: { observacao.value }</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card com métricas do corpo */}
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="h6">Métricas do Corpo</Typography>
              <Divider />

              <Typography sx={{ fontWeight: 'bold' }}>Peso: {weight.value} </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>Altura: {height.value} </Typography>
              <Divider />
              <Typography sx={{ fontWeight: 'bold' }}>Braços</Typography>
              <Typography>Direito: {bracoDireito.value} </Typography>
              <Typography>Esquerdo: {bracoEsquerdo.value} </Typography>
              <Divider />
              <Typography sx={{ fontWeight: 'bold' }}>Pernas</Typography>
              <Typography>Direito:  {pernaDireita.value} </Typography>
              <Typography>Esquerdo: {PernaEsquerda.value} </Typography>
              <Divider />
              <Typography sx={{ fontWeight: 'bold' }}>Panturrilhas</Typography>
              <Typography>Direito: {panturrilhaDireita.value} </Typography>
              <Typography>Esquerdo: {panturrilhaEsquerda.value} </Typography>
              <Divider />
              <Typography sx={{ fontWeight: 'bold' }}>Tronco: {tronco.value} </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>Quadril: {quadril.value} </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
    )
  })
)

export default provider({ formProfileStore, formProfileMetricsStore })(ProfileForm)
