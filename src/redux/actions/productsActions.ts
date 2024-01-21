import axios from 'axios';
const api = process.env.REACT_APP_API_URL;

export const getProducts = ()=>async(dispatch:any)=>{
    try{
        const res = await axios.get(`${api}/products`);
        dispatch({
            type:'getProducts',
            payload:res.data
        })
    }catch(e:any){
        console.log(e);
    }
}


export const deleteProduct = (productId:string)=>async(dispatch:any)=>{
    try {
        const res = await axios.delete(`${api}/products/${productId}`);
        if(res.status === 200){
            alert(res.data.message);
            dispatch({
                type:'deleteProduct',
                payload:productId
            });
            window.location.href = '/admin/all-products';

        }
    } catch (error) {
        console.log(error);
    }
}


export const updateProduct = (product:any,productId:string)=>async(dispatch:any)=>{
    console.log(product);
    try {
        const res = await axios.patch(`${api}/products/${productId}`,product);
        if(res.status === 200){
            alert(res.data.message);
            window.location.href = '/admin/all-products';
        }
    } catch (error:any) {
        alert(error.message);
    }


}


export const addProduct = (product:any)=>async(dispatch:any)=>{

    try {
        const res = await axios.post(`${api}/products`,product);
        if(res.status === 200){
            alert(res.data.message);
            window.location.href = '/admin/all-products';
        }
    } catch (error:any) {
        alert(error.message);
    }


}