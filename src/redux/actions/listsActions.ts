import axios from 'axios';
import { List } from '../../Types';
const api = process.env.REACT_APP_API_URL;

export const saveNewList = (list:any)=>async(dispatch:any)=>{
    
    try{
        const res = await axios.post(`${api}/lists`,list);
        dispatch({
            type:'saveNewList',
            payload:res.data
        })
        alert(res.data.message);
        window.location.href ='./';
    }catch(e:any){
        console.log(e);
    }
}



export const getAllLists = (userId:string)=>async(dispatch:any)=>{

    try {
        const res = await axios.get(`${api}/lists/all-list-by-user/${userId}`);
        dispatch({
            type:'getAllLists',
            payload:res.data
        })
    } catch (error) {
        console.log(error);
    }

}


export const getSingleList = (listId:string)=>async(dispatch:any)=>{

    try {
        const res = await axios.get(`${api}/lists/all-list-by-user/${listId}`);
        dispatch({
            type:'getSingleList',
            payload:res.data
        })
    } catch (error) {
        console.log(error);
    }

}