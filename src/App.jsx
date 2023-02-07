import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App () {
  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState([])
  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=51b85702c81a46b2971e64fe5bbad48c`
      const respuesta = await fetch(url)
      const noticias = await respuesta.json()
      guardarNoticias(noticias.articles)
    }
    consultarApi()
  }, [categoria])
  return (
    <main className='App'>
      <Header
        titulo='Buscador de Noticias'
      />
      <article className='container white'>
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </article>
    </main>
  )
}

export default App
