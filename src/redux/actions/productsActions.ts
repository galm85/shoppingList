import axios from 'axios';
const api = process.env.REACT_APP_API_URL;

export const getProducts = ()=>async(dispatch:any)=>{
    try{
        dispatch({type:'startLoad'});
        const res = await axios.get(`${api}/products`);
        dispatch({
            type:'getProducts',
            payload:res.data
        })
        dispatch({type:'endLoad'});
    }catch(e:any){
        dispatch({type:'endLoad'});
        console.log(e);
    }
}


export const deleteProduct = (productId:string)=>async(dispatch:any)=>{
    try {
        dispatch({type:'startLoad'});
        const res = await axios.delete(`${api}/products/${productId}`);
        if(res.status === 200){
            dispatch({
                type:'deleteProduct',
                payload:productId
            });
            dispatch({type:'endLoad'});
            window.location.href = './admin/all-products';

        }
    } catch (error) {
        dispatch({type:'startLoad'});
        console.log(error);
    }
}


export const updateProduct = (product:any,productId:string)=>async(dispatch:any)=>{
    try {
        dispatch({type:'startLoad'});
        const res = await axios.patch(`${api}/products/${productId}`,product);
        if(res.status === 200){
            window.location.href = './admin/all-products';
        }
        dispatch({type:'endLoad'});
    } catch (error:any) {
        dispatch({type:'endLoad'});
        console.log(error.message);
    }


}


export const addProduct = (product:any)=>async(dispatch:any)=>{

    try {
        dispatch({type:'startLoad'});
        const res = await axios.post(`${api}/products`,product);
        if(res.status === 200){
            dispatch({type:'endLoad'});
            dispatch({type:'addMessage',payload:res.data.message});
            window.location.href = './admin/all-products';
            setTimeout(()=>{
                dispatch({type:'addMessage',payload:''});
            },2000)
        }
    } catch (error:any) {
        dispatch({type:'endLoad'});
        alert(error.message);
    }


}