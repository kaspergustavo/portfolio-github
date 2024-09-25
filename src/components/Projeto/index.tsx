import Paragrafo from '../Paragrafo'
import Title from '../Title'

import { Card, LinBotao } from './styles'

const Projeto = () => (
  <Card>
    <Title>Projeto Lista de tarefas</Title>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
    <LinBotao>Visualizar</LinBotao>
  </Card>
)

export default Projeto
