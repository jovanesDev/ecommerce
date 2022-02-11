import React from 'react'

const Error = () => {
    return (
        <div className="container d-flex h-100 align-itmes-center justify-content-center" >
            <div className="d-flex flex-column justify-content-center"  style={{minHeight:"100vh"}}>
            <h1 className="display-1 text-center">404</h1>
            <p className="fs-1">La pagina que esta buscando no existe o fue eliminado</p>
            </div>

        </div>
    )
}

export default Error
