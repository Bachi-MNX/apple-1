import React from 'react'
import Product from './Product'
import axios from 'axios'
import Carousel from './Carousel'
import Slider from './Slider'





const ProductList = () => {

  const [storeProducts, setStoreProduct]  = React.useState([])
  

  const getData = async () => {
    const {data} = await axios.get("http://localhost:5000/getProducts")

    if(data){
      setStoreProduct(data)
    }
  }

  React.useEffect(() =>{
    getData()
  }, [])

  return (
  <>
   <Slider />
    <div className='page'>
    <section className='container'>
      <div className='row gap-4 '>
         { 
          storeProducts.slice(0, 9).map(({_id, title, img, price, inCart, category}) => {
              return(
                <Product 
                title={title} 
                img={img} 
                price={price}  
                id={_id}
                inCart={inCart} />
              )
          })
         }
      </div> 
    </section>
  </div>
  <Carousel />
  </>
  )
}
export default ProductList  

