import React from 'react'

function ProductRow(props) {
    // console.log(props)
  return (
    <div>
    <div className='header-p'>
    <h3>Name</h3>
    <h3>Price</h3>
    </div>
{props.oneProduct.products.map((eachProduct)=>{
    {/* console.log(eachProduct) */}
       return(
        <div  className='name-p' key={eachProduct.id}>
        
            <p>{eachProduct.name}</p>
            <p>{eachProduct.price}</p>
        

        </div>
       )


    })}

    </div>
  )
}

export default ProductRow