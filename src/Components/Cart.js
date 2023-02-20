import React from 'react'
import axios from 'axios'

import CartItem from './CartItem'
import Total from './Total'

const Cart = (props) => {

  const [product, setProduct] = React.useState([])
  const [total, setTotal]= React.useState()

  async function getData(){
    const {data} = await axios.get("http://localhost:5000/getCart")
    if(data){
      setProduct(data)
    }
  }

  const clearCart = async () => {
    await axios.patch('http://localhost:5000/clearCart').then(window.location.reload())
  }

  React.useEffect(() => {
    getData()
   
  }, [])
  
  const getTotal = async () => {
    const {data} = await axios.get('http://localhost:5000/getTotal')
    if(data){
      var t = data.reduce((a ,b) => a+b)
      setTotal(t)
    }
  }
  return (
    <section className='py-4 container'>
    <div className='row justify-content-center'>
        <div className='col-12 '>
            {/* <h5>total Items: {totalQty} </h5> */}
            <table className='table table-light table-hover m-0'>
                <tbody>
              {  product.map(({title, _id, qty, img, inCart}) =>{
                if(inCart  === true){
                        return (
                          <CartItem getTotal={getTotal} qty={qty} id={_id} title={title} img={img} />
                        )
                      }
                    })
                    }
                </tbody>
            </table>
        </div>
        <div className='col-auto '>
          <Total total={total} getTotal={getTotal} />
        </div>
        <div className='col-auto'>
            <button className='btn btn-danger m-2'
                onClick={clearCart}
            >Clear Cart</button>
            <button className='btn btn-primary m-2'>Buy Now</button>
        </div>
    </div>
</section>
    // <div>

    //   {
    //         product.map(({title, _id, img, inCart}) =>{
    //           if(inCart  === true){
    //             return(
    //               <Product id={_id} title={title} img={img} />
    //             )
    //           }
    //         })
    //       }
    // <div className='total-price'>Total price: {totalPrice}</div>
    // </div>

  )
}

export default Cart