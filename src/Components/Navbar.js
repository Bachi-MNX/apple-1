import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import axios from 'axios'
import Search from './Search'




const Navbar = () => {
  const [product, setProduct] = React.useState([])
  const [totalItem, setTotalItem] = React.useState(0)
  const total = []

  async function getData(){
    const {data} = await axios.get("http://localhost:5002/getCart")
    if(data){
      setProduct(data)
       data.map(item => total.push(item._id ))
    }
  }

  React.useEffect(() => {
    product.map(item => total.push(parseInt(item._id)))
    setTotalItem(total.reduce((a) => a + 1 , 0))
  }, [product])

  React.useEffect(() => {
    getData()
   
  }, [])
  const category = [
    {
      name: "iphone" //აქ წესით ამ სახელების მაგიერ აიდები უნდა ეწეროს მარა ესეც მუშაობს 
    },
    {
      name: "ipad"
    },
    {
      name: "Mac"
    },
    {
      name: "watch"
    },
    {
      name: "AirPods"
    },
  ]
  return (
    
    <div className='nav-bar' >
        <Link to="/" onClick={() =>  window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img className='logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png'>
            </img></Link>
            
          {
          category.map(({ name }) => (
            <Link className='link-1' to={`/category?&category=${name}`}><span className='menu-list'>{name}</span> </Link>
          ))
         }
         <Search />
         <div className='person-cart-icone-cont1'>
         <span><Link to="/cart"><i className="bi bi-bag"></i></Link><h5>{totalItem}</h5></span>
         <Link to="/login"><i class="bi bi-person-circle"></i></Link>
            </div>
            <Menu/>
    </div>
  )
}

export default Navbar