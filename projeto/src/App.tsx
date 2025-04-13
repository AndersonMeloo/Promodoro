import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'

import './assets/sass/global.scss'
import './assets/sass/theme.scss'


export function App() {

  return (

    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}

export default App;