import Noticia from './Noticia'
import PropTypes from 'prop-types'

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

ListadoNoticias.propTypes = {
  noticias: PropTypes.array.isRequired
}
export default ListadoNoticias
