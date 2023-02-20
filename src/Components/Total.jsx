import axios from 'axios'
import React from 'react'

function Total({getTotal,total}) {
  
  React.useEffect(() => {
    getTotal()
  })
 
  return (
    <h2>Total Price: ${total}</h2>
  )
}

export default Total