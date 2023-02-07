import Header from './components/Header'
import Formulario from './components/Formulario'

function App () {
  return (
    <main className='App'>
      <Header
        titulo='Buscador de Noticias'
      />
      <article className='container white'>
        <Formulario />
      </article>
    </main>
  )
}

export default App
