import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Router, Routes } from 'react-router-dom';
import NewList from './pages/NewList';
import { MainState, Product } from './Types';
import AddProduct from './pages/admin/AddProduct';
import Register from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import MyLists from './pages/MyLists';
import SingleList from './pages/SingleList';

function App() {

  const user:any  = useSelector((state:MainState)=>state.userReducer.user);
  

  return (
    <div className="App">
      <Navbar/>      

      <main>
        <Routes>
          {user ? 
          <>
            <Route path='/new-list' element={<NewList  />} />
            <Route path='/my-lists/:listName' element={<SingleList/>}/>
            <Route path='/my-lists' element={<MyLists/>}/>
            <Route path='/admin/add-product' element={<AddProduct/>} />
           
          </>
          :
          <>
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
          </>  
        
        }
         
         <Route path='/' element={<Home  />} />
         
        </Routes>
       
      </main>

      <footer>
        Gal
      </footer>
    </div>
  );
}

export default App;
