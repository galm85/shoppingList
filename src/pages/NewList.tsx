import React, { useState } from 'react'
import products from '../data/products.json';
import { Product } from '../Types';
import { useNavigate} from 'react-router-dom';


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
    <div>

    {products && products.map((product:Product)=>(
        <div key={product.id}>
            <label htmlFor={`product-${product.id}`}>{product.title}</label>
            <input type="checkbox" id={`product-${product.id}`} onChange={(e)=>handleChange(e,product)} />
        </div>
    ))}

        <button onClick={handleSave}> Save</button>
    </div>
  )
}

export default NewList