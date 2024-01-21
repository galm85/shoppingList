import React, { useEffect, useState } from 'react';
import { List, MainState, User } from '../Types';
import { useSelector } from 'react-redux';
import { deleteList, getAllLists } from '../redux/actions/listsActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Dialog from '../components/Dialog';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const MyLists = () => {

    const navigate:any = useNavigate();
    const dispatch:any = useDispatch();
    const user:User = useSelector((state:MainState)=>state.userReducer.user);
    const myLists:List[] = useSelector((state:MainState)=>state.listReducer.lists);

    const [openDialog,setOpenDialog] = useState<boolean>(false);
    const [listId,setListId] = useState<string>("");

    useEffect(()=>{
        if(user && user._id){
           dispatch(getAllLists(user._id));
        }
    },[])

    const handleDelete = (e:any,listId:any)=>{
        e.stopPropagation();
        setListId(listId);
        setOpenDialog(true);
    }

  return (
    <div className='page my-lists-page'>
        <button className='add-new-list-btn' onClick={()=>navigate('/new-list')}>
            <AddCircleIcon fontSize='large'/>
        </button>
        <h2 className='page-title'>{'הרשימות של  '+user.userName}</h2>
        <div className='my-lists'>
            {myLists && myLists.map((list:List)=>(
                <div className='my-lists__list' key={list._id} onClick={()=>{navigate(`/my-lists/${list.listName}`,{state:{list}})}}>
                    <h3>{list.listName} </h3>
                    <span>( {list.items.length} )</span> 
                    <button className='delete-list-btn' onClick={(e)=>{handleDelete(e,list._id)}}> <DeleteForeverIcon style={{color:'red'}}/></button>
                </div>
            ))}
        </div>

            <Dialog question='האם למחוק את הרשימה?' 
                    isOpen={openDialog}
                    setIsOpen={setOpenDialog}
                    action={deleteList} 
                    params={[listId]}
                />
    </div>
  )
}

export default MyLists