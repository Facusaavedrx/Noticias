import styles from '../stylesheets/Formulario.module.css'

function Formulario () {
  return (
    <section className={`${styles.buscador} row`}>
      <div className='col s12 m8 offset-m2'>
        <form>
          <h2 className={styles.heading}>Encuentra Noticias por categoria</h2>
          <div className='input-field col s12'>
            <input
              type='submit'
              className={`${styles.btnblock} btn-large amber darken-2`}
              value='Buscar'
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Formulario
