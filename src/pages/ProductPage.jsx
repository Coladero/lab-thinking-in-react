import { useEffect, useState } from 'react'
import ProductTable from '../components/ProductTable'
import SearchBar from '../components/SearchBar'
import jsonData from '../data.json'

function ProductPage() {
  
  const [products, setProducts] = useState(jsonData)
  // console.log(products)



  const searchProducts = (searchQuery)=>{
    const filteredProducts = products.filter((eachProduct)=>{
      return eachProduct.products.name.includes(searchQuery)
    })
    setProducts(filteredProducts)
    
  }

  return (
    <div>
    
    <h1>WalaStore</h1>
    <SearchBar searchProducts={searchProducts}/>

    <ProductTable products={products}/>


    </div>
  )
}

export default ProductPage