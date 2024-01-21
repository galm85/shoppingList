import { Divider } from '@mui/material';
import {FormEvent, useRef, useState} from 'react'
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import { deleteProduct, updateProduct } from '../../redux/actions/productsActions';
import { useDispatch } from 'react-redux';



const EditProduct = () => {

    const location:any = useLocation();
    const navigate:any = useNavigate();

    const [newProduct,setNewProduct] = useState(location.state.product);
    const [error,setError] = useState<string>('');
    const [imagePreview,setImagePreview] = useState<string>('');
    const fileInputRef = useRef<any>(null);
    const dispatch:any = useDispatch();
   
    const handleImage = (e:any)=>{
        const selectedImage = e.target.files[0];
        console.log(selectedImage);
        setNewProduct({...newProduct,image:selectedImage});
        
        let reader = new FileReader();
        reader.readAsDataURL(selectedImage);
        reader.onload = (e:any)=>{
            setImagePreview(e.target.result);
        }
    }

    const deleteImage = ()=>{
        setImagePreview('');
        setNewProduct({...newProduct,image:''});
    }

    const handleSubmit = async (e:FormEvent)=>{
        e.preventDefault();
        setError('');
        if(!newProduct.title || newProduct.title === ''){
            setError("אנא הכנס שם מוצר");
            return;
        }

        try{

            const data = new FormData();
            data.append('title',newProduct.title);
            data.append('image',newProduct.image);
            
            dispatch(updateProduct(data,newProduct._id));
            
        }catch(e:any){
            alert(e.response.data.message)
        }

    }



  return (
    <div className='page'>
        <div className="page-title">
           עריכת מוצר
        </div>
        <form className='new-product-form' onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="title">שם המוצר</label>
                <input type="text" 
                       name='title' 
                       id='title'  
                       value={newProduct.title} 
                       onChange={(e:any)=>{setNewProduct({...newProduct,title:e.target.value})}}/>
                <span>{error}</span>
            </div>
            <div className="input-group">
                <button className='btn primary-btn' type="button" onClick={()=>{console.log(fileInputRef.current);fileInputRef.current.click()}}>בחר תמונת מוצר</button>
                <input onChange={(e)=>handleImage(e)} ref={fileInputRef}  type="file" name='image' id='image' />
            </div>
                {imagePreview && 
                    <div className='image-preview'>
                        <img src={imagePreview} alt="uploaded" />
                        <button onClick={()=>deleteImage()}>מחק תמונה</button>
                    </div>
                }

                {!imagePreview && newProduct.image &&
                <div className='image-preview'>
                    <img src={newProduct.image} alt="uploaded" />
                </div>
                }
                   
            <Divider/>
            <div className='form-action'>
                <input type="submit"  className='btn save-btn' value="  שמור מוצר"/>
           
            </div>
        </form>

        <div className="delete-product">
            <button onClick={()=>dispatch(deleteProduct(newProduct._id))}>Delete</button>
        </div>
    </div>
  )
}

export default EditProduct