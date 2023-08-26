import React, { useState } from 'react'
import products from '../data/products.json';
import { Product } from '../Types';
import { useNavigate} from 'react-router-dom';
import DefaultProduct from '../assets/product-default.png';

type Props = {
    setMyList: React.Dispatch<React.SetStateAction<Product[]>>;
  };

const NewList: React.FC<Props> = ({ setMyList }) => {


    const navigate:any = useNavigate()
    const [productList,setProductList] = useState<any[]>([]);

    const handleChange = (e:any,product:Product)=>{
        let isChecked = e.target.checked;
        if(isChecked){
            setProductList([...productList,product]);
        }else{
            setProductList(prev=> prev.filter(p => p.id !== product.id));
        }
    }

    const handleSave = ()=>{
        setMyList(productList);
        navigate('/');
    }
  return (
    <div className='page'>
        <h2 className='page-title'>New List</h2>
        <div className="new-list">
            {products && products.map((product:Product)=>(
                <div key={product.id} className='new-list-item'>
                    <img src={DefaultProduct} alt={product.title}/>
                    <label htmlFor={`product-${product.id}`}>{product.title}</label>
                    <input type="checkbox" id={`product-${product.id}`} onChange={(e)=>handleChange(e,product)} />
                </div>
            ))}
        </div>

        <div className="new-list-actions">
            <button className='save-btn btn' onClick={handleSave}> Save</button>
        </div>
    </div>
  )
}

export default NewList