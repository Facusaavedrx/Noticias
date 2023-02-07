import { useState } from 'react'

function useSelect (stateInicial, opciones) {
  const [state, actualizarState] = useState('')

  const SelectNoticias = () => {
    return (
      <select
        className='browser-default'
      >
        <option value=''>Seleccione</option>
      </select>
    )
  }
  return [state, SelectNoticias]
}

export default useSelect
