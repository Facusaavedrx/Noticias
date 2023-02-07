import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'

function App () {
  const [categoria, guardarCategoria] = useState('')
  return (
    <main className='App'>
      <Header
        titulo='Buscador de Noticias'
      />
      <article className='container white'>
        <Formulario
          guardarCategoria={guardarCategoria}
        />
      </article>
    </main>
  )
}

export default App
