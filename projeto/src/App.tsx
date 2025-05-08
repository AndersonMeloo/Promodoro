import './assets/sass/global.scss'
import './assets/sass/theme.scss'

import { Menu } from './components/Menu'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { CountDown } from './components/CountDown'
import DefaultInput from './components/DefaultInput'
import Cycles from './components/Cycles'
import Footer from './components/Footer'
import { PlayCircleIcon } from 'lucide-react'
import DefaultButton from './components/DefaultButton'

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

      <Container>


        <form action="" className='form'>

          <div className="formRow">
            <DefaultInput id='meuInput' labelText='task' type='text' title='Titulo' placeholder='Digite algo' required />
          </div>

          <Container>
            <Cycles />
          </Container>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  )
}

export default App;