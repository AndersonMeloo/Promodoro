import { Container } from './components/Container'
import { Logo } from './components/Logo'

import './assets/sass/global.scss'
import './assets/sass/theme.scss'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'


export function App() {

  return (

    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>
    </>
  )
}

export default App;