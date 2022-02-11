import React from 'react'
import { GlobalProvider } from '../../context/GlobalContext'

const Search = ({className}) => {

  const {setBuscar} = GlobalProvider()

  const handleChange = (e) => {

    setBuscar(e.target.value)
  }

    return (
        <input
        className={className}
        onChange={handleChange}
        type="search"
        placeholder="Buscar"
        aria-label="Search"
      />
    )
}

export default Search
