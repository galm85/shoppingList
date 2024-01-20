import React, { useEffect, useState } from 'react'
import { Product } from '../Types'
import ProductDefault from '../assets/product-default.png';
import { useSelector } from 'react-redux';
import { getAllLists } from '../redux/actions/listsActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { List, MainState, User } from '../Types';


type Props = {
    myList:Product[];
}

const Home = () => {

  const user:User = useSelector((state:MainState)=>state.userReducer.user);
  const navigate:any = useNavigate();


  useEffect(()=>{
    if(user && user._id){
      navigate('/my-lists');
    }
  },[]);

  return (
    <div className='home-page'>

      {user && user._id}
      <h2 className='page-title'>Shopping list app</h2>
    
      <h2>Please Login</h2>
      <button onClick={()=>{navigate('/login')}}>Login</button>

       
    </div>
  )
}

export default Home