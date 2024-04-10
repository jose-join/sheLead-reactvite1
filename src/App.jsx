import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <p>Hola esta la pagina principal</p>
    </>
  )
}

export default App
