import React, { useEffect } from 'react';
import { List, MainState, User } from '../Types';
import { useSelector } from 'react-redux';
import { getAllLists } from '../redux/actions/listsActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


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
    <div className='page'>
        <h2>הרשימות שלי</h2>
        <div>
            {myLists && myLists.map((list:List)=>(
                <div key={list._id} onClick={()=>{navigate(`/my-lists/${list.listName}`,{state:{list}})}}>
                    <h3>{list.listName} ( {list.items.length} )  </h3>

                </div>
            ))}
        </div>

    </div>
  )
}

export default MyLists