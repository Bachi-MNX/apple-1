import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd';
import axios from 'axios';
const { Meta } = Card;

const Product = (props) => {
  const [state, setState] = React.useState(props.inCart)

  const addToCart = async  () => {
    await axios.patch('http://localhost:5000/addToCart', {
      id: props.id
    })
  }
  return (
    <Link className='link col-sm justify-content-center' to={`/details?&id=${props.id}&name=${props.title}`}
    data-aos="zoom-in" >
    <Card
    hoverable
    style={{
        width: 340,
    }}
    cover={<img alt="example" src={props.img} />}
>
    <Meta title={props.title} description={`Price: $${props.price}`} />
    {
        state == false 
        ? 
       <button className='card-button' onClick={addToCart}>add to cart</button>
        : 
        <Link to="/cart"><button  className='card-button2'>Go to Cart</button></Link>
      }
</Card></Link>
  )
}

export default Product


