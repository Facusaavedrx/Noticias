import { useState } from 'react'

function useSelect (stateInicial, opciones) {
  const [state, actualizarState] = useState(stateInicial)

  const SelectNoticias = () => {
    return (
      <select
        className='browser-default'
        value={state}
        onChange={e => actualizarState(e.target.value)}
      >
        {opciones.map(opcion => {
          return (
            <option value={opcion.value} key={opcion.value}>
              {opcion.label}
            </option>
          )
        })}
      </select>
    )
  }
  return [state, SelectNoticias]
}

export default useSelect
