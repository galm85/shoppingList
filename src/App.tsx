import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Router, Routes } from 'react-router-dom';
import NewList from './pages/NewList';
import { Product } from './Types';
import AddProduct from './pages/admin/AddProduct';

function App() {

  const [myList,setMyList] = useState<Product[]>([]);

  return (
    <div className="App">
      <Navbar/>      

      <main>

        <Routes>
          <Route path='/new-list' element={<NewList setMyList={setMyList} />} />
          <Route path='/admin/add-product' element={<AddProduct/>} />
          <Route path='/' element={<Home myList={myList} />} />
        </Routes>
       
      </main>

      <footer>
        Gal
      </footer>
    </div>
  );
}

export default App;
