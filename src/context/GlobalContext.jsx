import React, { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = () => useContext(GlobalContext)

const GlobalState = ({children}) => {

    const [buscar,setBuscar] = useState("");
    const [mostrarAlerta,setMostrarAlerta] = useState(false);
    const [loading,setLoading] = useState(false)

    return (
        <GlobalContext.Provider value={{
            buscar,
            mostrarAlerta,
            setBuscar,
            setMostrarAlerta,
            loading,
            setLoading
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
