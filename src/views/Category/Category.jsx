import React from 'react'
import { useParams } from 'react-router'
import Footer from '../../components/Footer/Footer'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import Navbar from '../../components/Navbar/Navbar'

const Category = () => {
    const {category} = useParams()

    return (
        <div>
            <Navbar/>
            <ItemListContainer filter={category}/>
            <Footer/>
        </div>
    )
}

export default Category
