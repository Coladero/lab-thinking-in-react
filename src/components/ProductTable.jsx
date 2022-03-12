import React, { useState } from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {
    // console.log("hola",props)
    const [oneProduct, setOneProduct] = useState(props)
    // console.log(oneProduct)
    return (
    <div className='product-table'>
        <ProductRow oneProduct={oneProduct}/>
    </div>
  )
}

export default ProductTable