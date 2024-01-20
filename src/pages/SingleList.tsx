import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ListItem, MainState } from '../Types';
import { useDispatch,useSelector } from 'react-redux';
import { checkProductOnList, getSingleList,clearList } from '../redux/actions/listsActions';
//this is a test


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
    <div className='page'>
        <h1>{currentList?.listName}</h1>
        <button onClick={()=>navigate(`/edit-list/${currentList?.listName}`,{state:{list:currentList}})}>Update List</button>
        <button onClick={()=>clearTheList()}>Clear List</button>
        <div className="product-list">
            {currentList.items && currentList.items.map((product)=>(
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