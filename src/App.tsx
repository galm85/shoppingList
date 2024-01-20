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
import EditList from './pages/EditList';
import Footer from './components/Footer';
import AllProducts from './pages/admin/AllProducts';
import EditProduct from './pages/admin/EditProduct';

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
            <Route path='/edit-list/:listName' element={<EditList/>}/>
            <Route path="/admin/all-products" element={<AllProducts/>}/>
            <Route path='/admin/add-product' element={<AddProduct/>} />
            <Route path='/admin/edit-product/:productTitle' element={<EditProduct/>}/>
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

        <Footer/>
    </div>
  );
}

export default App;
