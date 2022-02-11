import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import useFirebase from '../../hooks/useFirebase'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const {id} = useParams()
    const {producto,fetchGetIndividualProduct} = useFirebase()

    useEffect(() => {
        fetchGetIndividualProduct({id})
        // eslint-disable-next-line
    }, [])

    return (
        <div>
           {producto && <ItemDetail item={producto}/>}
        </div>
    )
}

export default ItemDetailContainer
