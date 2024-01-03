import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { List, ListItem, Product } from '../Types';

//this is a test


const SingleList = () => {

    const location:any = useLocation();
    const list = location.state.list;
    const [productList,setProductList] = useState<ListItem[]>(list.items);
    const [listName,setListName] = useState<string>(list.listName);
    console.log(productList);
    
    const handleChange = (e:any,product:ListItem)=>{
       // TODO
       // need to implement check item in list 
    }


  return (
    <div className='page'>
        <h1>{listName}</h1>
        <div className="product-list">
            {productList && productList.map((product)=>(
                <div className='item' key={product._id}>
                    <div className="item-data">
                        <img style={{width:"50px"}} src={product?.image} alt={product.title} />
                        <h4>{product?.title}</h4>
                    </div>
                    <input type="checkbox" id={product._id} checked={product.checked}  onChange={(e)=>handleChange(e,product)} />

                    
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default SingleList