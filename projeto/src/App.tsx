import './assets/sass/global.scss'
import './assets/sass/theme.scss'
import { Container } from './components/Container'
import { Heading } from './components/Heading'


export function App() {

  return (

    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}

export default App;