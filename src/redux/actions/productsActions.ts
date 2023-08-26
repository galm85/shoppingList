import axios from 'axios';
const api = process.env.REACT_APP_API_URL;

export const getProducts = ()=>async(dispatch:any)=>{
    console.log(111);
    try{
        const res = await axios.get(`${api}/products`);
        console.log('sss');
        dispatch({
            type:'getProducts',
            payload:res.data
        })
    }catch(e:any){
        console.log(e);
    }
}