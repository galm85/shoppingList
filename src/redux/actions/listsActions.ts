import axios from 'axios';
import { List,ListItem } from '../../Types';
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
        const res = await axios.get(`${api}/lists/get-single-list/${listId}`);
        if(res.status === 200){
            dispatch({
                type:'getSingleList',
                payload:res.data
            })
        }
    } catch (error) {
        console.log(error);
    }

}


export const checkProductOnList = (listId:string,productId:string)=>async(dispatch:any)=>{
    
    try {
        const res = await axios.patch(`${api}/lists/check-product-on-list/${listId}/${productId}`)
        if(res.status === 200){
            dispatch({
                type:'checkProductOnList',
                payload:res.data.list,
            })
        }

       
    } catch (error) {
        console.log(error);
    }
}


export const updateList = (list:any)=>async(dispatch:any)=>{
   
    try{
        const res = await axios.patch(`${api}/lists/update-exist-list/${list._id}`,list);
        dispatch({
            type:'updateList',
            payload:list
        })
        alert(res.data.message);
        window.location.href ='/';
    }catch(e:any){
        console.log(e);
    }
}


export const clearList = (list:any)=>async(dispatch:any)=>{
   
    let updatedItems = list.items.map((item:ListItem) => {
        item.checked = false
        return item
    });
    list.items = updatedItems;
    try{
        const res = await axios.patch(`${api}/lists/update-exist-list/${list._id}`,list);
        dispatch({
            type:'clearList',
            payload:list
        })
        alert(res.data.message);
        window.location.reload();

    }catch(e:any){
        console.log(e);
    }
}
