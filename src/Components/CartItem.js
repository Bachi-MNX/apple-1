import React from 'react'
import axios from 'axios';

const CartItem = (props) => {

    // const [state, setState] = React.useState(props.inCart)
    const [qty, setQty] = React.useState(props.qty)
    const [loader, setLoader] = React.useState(false)
  
    const removeFromCart = async () => {
      await axios.patch('http://localhost:5002/removeFromCart', {
        id: props.id
      }).then(window.location.reload())

    }
    const qtyInc = () => {
        setQty(qty => qty + 1)
      }
    const qtyDec = () => {
        if(qty < 2){
            removeFromCart()
        }else{
            setQty(qty => qty - 1)
        }
      }
      async function updateQty(){
        setLoader(true)
        await axios.patch('http://localhost:5002/updateQty', {
          id: props.id,
          qty: qty
      }).then(setLoader)
      }
      React.useEffect(() => {
        updateQty()
      }, [qty])

  return (
                <>
                            <tr >
                                <td>
                                    <img src={props.img} style={{ height: '6rem' }} />
                                </td>
                                <td>{props.title}</td>
                                <td>{props.price}</td>
                                <td>Quantity {qty}</td>
                                <td>
                                    <button className='btn btn-info ms-2'
                                        onClick={qtyDec}
                                    >-</button>
                                    <button className='btn btn-info ms-2'  onClick={qtyInc}>+</button>
                                    <button className='btn btn-danger ms-2'
                                        onClick={removeFromCart}
                                    >Remove Item</button>
                                </td>
                            </tr>
                    </>
        
  )
}

export default CartItem