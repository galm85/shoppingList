import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productsActions';
import { MainState, Product } from '../../Types';
import DefaultProduct from '../../assets/product-default.png';
import { useNavigate } from 'react-router-dom';


const AllProducts = () => {

    const dispatch:any = useDispatch();
    const products:Product[] = useSelector((state:MainState)=>state.productReducer.products);
    const navigate:any = useNavigate();

    useEffect(()=>{
        dispatch(getProducts());
    },[])


    return (
    <div className="page admin-all-products">
        <h2 className='page-title'>מאגר המוצרים</h2>
        <div className='all-products-container'>
            {products && products.map((product:Product)=>(
                <div className='product-item' onClick={()=>navigate(`/admin/edit-product/${product.title}`,{state:{product}})}>
                    <img style={{width:'50px'}} src={product.image ? product.image : DefaultProduct} alt={product.title}/>
                    <p>{product.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AllProducts