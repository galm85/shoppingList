import React, { useEffect, useState } from 'react'
import { MainState, Product } from '../Types';
import { useNavigate} from 'react-router-dom';
import DefaultProduct from '../assets/product-default.png';
import { useSelector,useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions/productsActions';
import { saveNewList } from '../redux/actions/listsActions';




const NewList = () => {

    const navigate:any = useNavigate();
    const dispatch:any = useDispatch();
    
    const products = useSelector((state:MainState)=>state.productReducer.products);
    const user = useSelector((state:MainState)=>state.userReducer.user);
    
    const [productList,setProductList] = useState<any[]>([]);
    const [listName,setListName] = useState<string>('');


    if(!user) navigate('/login');
   

    useEffect(()=>{
        dispatch(getProducts());
    },[])

    

    const handleChange = (e:any,product:Product)=>{
        let isChecked = e.target.checked;
        if(isChecked){
            setProductList([...productList,product]);
        }else{
            setProductList(prev=> prev.filter(p => p._id !== product._id));
        }
    }

    const handleSave = ()=>{
        productList.forEach(item => {
            item.checked = false;
            delete item.updatedAt;
            delete item.createdAt;
        });
        const data = {
            items:productList,
            userId:user._id,
            listName:listName ? listName : 'רשימה ללא שם',
        }
        dispatch(saveNewList(data))

    }
  return (
    <div className='page'>
    
        <h2 className='page-title'>יצירת רשימה חדשה</h2>
        <div className='list-name'>
            <input type="text" name="listName" id="ListName" placeholder=' שם הרשימה' onChange={(e:any)=>setListName(e.target.value)} />
            <span></span>
        </div>
        <div className="new-list">
            {products && products.map((product:Product)=>(
                <div key={product._id} className='new-list-item'>
                    <img src={product.image ? product.image : DefaultProduct} alt={product.title}/>
                    <label htmlFor={`product-${product._id}`}>{product.title}</label>
                    <input type="checkbox" id={`product-${product._id}`} onChange={(e)=>handleChange(e,product)} />
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