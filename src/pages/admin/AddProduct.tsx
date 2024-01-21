import { Divider } from '@mui/material';
import {FormEvent, useRef, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actions/productsActions';


type newProduct ={
    title:string;
    image: any;
}

const AddProduct = () => {

    const [newProduct,setNewProduct] = useState<newProduct>({} as newProduct);
    const [error,setError] = useState<string>('');
    const [imagePreview,setImagePreview] = useState<string>('');
    const fileInputRef = useRef<any>(null);
    const navigate:any = useNavigate();
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
            
            dispatch(addProduct(data));
            // const res:any = await axios.post('http://localhost:4000/api/shopping-list/products',data);
            // alert(res.data.message);
            // navigate('/');
            
        }catch(e:any){
            alert(e.response.data.message)
        }

    }



  return (
    <div className='page'>
        <div className="page-title">
            הוסף מוצר חדש
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
                   
            <Divider/>
            <div className='form-action'>
                <input type="submit"  className='btn save-btn' value="  שמור מוצר"/>
           
            </div>
        </form>
    </div>
  )
}

export default AddProduct