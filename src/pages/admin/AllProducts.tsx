import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productsActions';
import { MainState, Product } from '../../Types';
import DefaultProduct from '../../assets/product-default.png';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
                <div key={product._id} className='product-item' onClick={()=>navigate(`/admin/edit-product/${product._id}`,{state:{product}})}>
                    <img style={{width:'50px'}} src={product.image ? product.image : DefaultProduct} alt={product.title}/>
                    <p>{product.title}</p>
                </div>
            ))}
        </div>
            <button className='add-new-product' onClick={()=>navigate('/admin/add-product')}><AddCircleIcon fontSize='large'/></button>
    </div>
  )
}

export default AllProducts