import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ListItem, MainState } from '../Types';
import { useDispatch,useSelector } from 'react-redux';
import { checkProductOnList, getSingleList,clearList } from '../redux/actions/listsActions';
import DefaultProduct from '../assets/product-default.png';



const SingleList = () => {

    const location:any = useLocation();
    const list = location.state.list;
    const dispatch:any = useDispatch();
    const currentList = useSelector((state:MainState)=>state.listReducer.currentList);
    const navigate:any = useNavigate();


    useEffect(()=>{
        dispatch(getSingleList(list._id))
    },[])

    
    const handleChange = (e:any,product:ListItem)=>{
        dispatch(checkProductOnList(list._id,product._id));
    }

    const clearTheList = ()=>{
           const result = window.confirm('Are you sure clear the list?');
           if(result){
            dispatch(clearList(currentList))
            
           }
    }

  return (
    <div className='page single-list-page'>
        <div className="page-header single-list-header">
            <h1 className='page-title'>{currentList?.listName}</h1>
            <div className="single-list-header__actions">
                <button className='btn edit-btn' onClick={()=>navigate(`/edit-list/${currentList?.listName}`,{state:{list:currentList}})}>עדכון רשימה</button>
                <button className='btn delete-btn' onClick={()=>clearTheList()}>נקה רשימה</button>
            </div>
        </div>
        <div className="product-list">
            {currentList.items && currentList.items.map((product)=>(
                <div className="item" key={product._id}>
                    {product.checked && <div className='checked-item'></div>}
                    <img style={{width:'50px'}} src={product.image ? product.image : DefaultProduct} alt={product.title}/>
                    <h4>{product?.title}</h4>
                    <input type="checkbox" id={product._id} checked={product.checked}  onChange={(e)=>handleChange(e,product)} />
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default SingleList