import MouseAnimationsProvider from './Context/MouseAnimations/MouseAnimationsProvider'
import Routes from './assets/Routes/Routes'
import LangProvider from './Context/Lang/LangProvider'

function App() {

  return (
    <>
      <MouseAnimationsProvider>
        <LangProvider>
          <Routes />
        </LangProvider>
      </MouseAnimationsProvider>
    </>
  )
}

export default App 
