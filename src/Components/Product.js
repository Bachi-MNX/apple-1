import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd';
import axios from 'axios';
const { Meta } = Card;

const Product = (props) => {
  const [state, setState] = React.useState(props.inCart)

  const addToCart = async  () => {
    await axios.patch('http://localhost:5002/addToCart', {
      id: props.id
    }).then(window.location.reload())
  }
  return (
    <Card
    data-aos="zoom-in" 
    hoverable
    style={{
        width: 340,
    }}
    cover={
      <Link className='link col-sm justify-content-center' to={`/details?&id=${props.id}&name=${props.title}`}>
        <img alt="example" src={props.img} />
      </Link>
    
    }
>
    <Meta title={props.title} description={`Price: $${props.price}`} />
    {
        state == false 
        ? 
       <button className='card-button' onClick={addToCart}>add to cart</button>
        : 
        <Link to="/cart"><button  className='card-button2'>Go to Cart</button></Link>
      }
</Card>
  )
}

export default Product


