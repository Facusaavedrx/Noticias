import Noticia from './Noticia'

function ListadoNoticias ({ noticias }) {
  return (
    <section className='row'>
      {noticias.map(noticia => {
        return (
          <Noticia
            key={noticia.url}
            noticia={noticia}
          />
        )
      })}
    </section>
  )
}

export default ListadoNoticias
