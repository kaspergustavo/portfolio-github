import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Gustavo Kasper</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        kaspergustavo
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Full Stack Developer
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Troca tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
