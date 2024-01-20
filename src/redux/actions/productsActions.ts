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