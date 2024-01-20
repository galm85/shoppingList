import React, { useEffect } from 'react';
import { List, MainState, User } from '../Types';
import { useSelector } from 'react-redux';
import { deleteList, getAllLists } from '../redux/actions/listsActions';
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

    const DeleteTheList = (e:any,listId:any)=>{
        e.stopPropagation();
        const result = window.confirm('האם למחוק את הרשימה?');
        if(result){
            dispatch(deleteList(listId))
        }
    }

  return (
    <div className='page my-lists-page'>
        <h2 className='page-title'>{'הרשימות של  '+user.userName}</h2>
        <div className='my-lists'>
            {myLists && myLists.map((list:List)=>(
                <div className='my-lists__list' key={list._id} onClick={()=>{navigate(`/my-lists/${list.listName}`,{state:{list}})}}>
                    <h3>{list.listName} </h3>
                    <span>( {list.items.length} )</span> 
                    <button className='delete-list-btn' onClick={(e)=>DeleteTheList(e,list._id)}><DeleteForeverIcon style={{color:'red'}}/></button>
                </div>
            ))}
        </div>

    </div>
  )
}

export default MyLists