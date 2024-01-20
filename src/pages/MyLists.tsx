import React, { useEffect } from 'react';
import { List, MainState, User } from '../Types';
import { useSelector } from 'react-redux';
import { getAllLists } from '../redux/actions/listsActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const MyLists = () => {

    const navigate:any = useNavigate();
    const dispatch:any = useDispatch();
    const user:User = useSelector((state:MainState)=>state.userReducer.user);
    const myLists:List[] = useSelector((state:MainState)=>state.listReducer.lists);

    useEffect(()=>{
        if(user && user._id){
           dispatch(getAllLists(user._id));
        }
    },[])

  return (
    <div className='page my-lists-page'>
        <h2 className='page-title'>{'הרשימות של  '+user.userName}</h2>
        <div className='my-lists'>
            {myLists && myLists.map((list:List)=>(
                <div className='my-lists__list' key={list._id} onClick={()=>{navigate(`/my-lists/${list.listName}`,{state:{list}})}}>
                    <h3>{list.listName} </h3>
                    <span>( {list.items.length} )</span> 
                    <button><DeleteForeverIcon style={{color:'red'}}/></button>
                </div>
            ))}
        </div>

    </div>
  )
}

export default MyLists