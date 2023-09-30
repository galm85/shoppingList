import React, { useState } from 'react'
import { Product } from '../Types'
import ProductDefault from '../assets/product-default.png';


type Props = {
    myList:Product[];
}

const Home:React.FC<Props> = ({myList}) => {

   

  return (
    <div className='home-page'>
      <h2 className='page-title'>List Name</h2>

       {myList && myList.map(product => (
        <div className='list-item' key={product._id}>
            <div className="list-item__data">
              <img src={ProductDefault} alt="default Image" width={50} />
              <p>{product.title}</p>
            </div>
            <div className="list-item__actions">
                <button className='btn delete-btn'>X</button>
            </div>
        </div>
       ))}
    </div>
  )
}

export default Home