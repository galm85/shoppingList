import React, { useState } from 'react'
import { Product } from '../Types'

type Props = {
    myList:Product[];
}

const Home:React.FC<Props> = ({myList}) => {

   

  return (
    <div>
       {myList && myList.map(product => (
        <div key={product.id}>{product.title}</div>
       ))}
    </div>
  )
}

export default Home