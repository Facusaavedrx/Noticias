import PropTypes from 'prop-types'
function Header ({ titulo }) {
  return (
    <nav>
      <a href='#!' className='brand-logo center'> {titulo} </a>
    </nav>
  )
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Header
