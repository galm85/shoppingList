import React, { useEffect, useState } from 'react'
import { List, ListItem, MainState, Product } from '../Types';
import { useLocation, useNavigate} from 'react-router-dom';
import DefaultProduct from '../assets/product-default.png';
import { useSelector,useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions/productsActions';
import { getSingleList, updateList } from '../redux/actions/listsActions';




const EditList = () => {

    const navigate:any = useNavigate();
    const dispatch:any = useDispatch();
    const location:any = useLocation();
    const list = location.state.list;
  

    const products = useSelector((state:MainState)=>state.productReducer.products);
    const user = useSelector((state:MainState)=>state.userReducer.user);
    const currentList = useSelector((state:MainState)=>state.listReducer.currentList);

    const [productList,setProductList] = useState<any[]>([...list.items]);
    const [listName,setListName] = useState<string>(list.listName);


    if(!user) navigate('/login');


    useEffect(()=>{
        dispatch(getProducts());
        if(!currentList._id){
            dispatch(getSingleList(list._id));
        }

    },[])

   
    const isOnList = (productId:string):boolean=>{

        let item = productList.find(item=> item._id === productId);
        if(item) return true;
        return false;
    }

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
            item.checked = item.checked ? item.checked : false;
            delete item.updatedAt;
            delete item.createdAt;
        });
        const data = {
            _id:list._id,
            items:productList,
            userId:user._id,
            listName:listName ? listName : 'רשימה ללא שם',
        }
        dispatch(updateList(data))

    }

  return (
    <div className='page'>
    
        <h2 className='page-title'>Edit</h2>
        <div className='list-name'>
            <input type="text" name="listName" id="ListName" placeholder='בחר שם לרשימה'value={listName} onChange={(e:any)=>setListName(e.target.value)} />
            <span></span>
        </div>
        
        <div className="new-list">
            {products && products.map((product:Product)=>(
                <div key={product._id} className='new-list-item'>
                    <img src={product.image} alt={product.title}/>
                    <label htmlFor={`product-${product._id}`}>{product.title}</label>
                    <input type="checkbox" id={`product-${product._id}`} onChange={(e)=>handleChange(e,product)} checked={isOnList(product._id)} />
                </div>
            ))}
        </div>

        <div className="new-list-actions">
            <button className='save-btn btn' onClick={handleSave}> Save</button>
        </div>
    </div>
  )
}

export default EditList