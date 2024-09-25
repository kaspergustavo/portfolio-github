import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at
      assumenda pariatur nihil illo, tempore totam alias minima laudantium
      facere incidunt facilis dicta fugit quis, ad aperiam modi excepturi
      magnam.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=kaspergustavo&show_icons=true&theme=dark&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kaspergustavo&layout=compact&langs_count=7&theme=dark" />
    </GithubSecao>
  </section>
)

export default Sobre
