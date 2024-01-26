import axios from 'axios';
import { List,ListItem } from '../../Types';
const api = process.env.REACT_APP_API_URL;

export const saveNewList = (list:any)=>async(dispatch:any)=>{
    
    try{
        dispatch({type:'startLoad'});
        const res = await axios.post(`${api}/lists`,list);
        dispatch({
            type:'saveNewList',
            payload:res.data
        })
        dispatch({type:'endLoad'});
        window.location.href ='./';
    }catch(e:any){
        dispatch({type:'endLoad'});
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
        dispatch({type:'startLoad'});
        const res = await axios.patch(`${api}/lists/update-exist-list/${list._id}`,list);
        dispatch({
            type:'updateList',
            payload:list
        })
        dispatch({type:'endLoad'});
        window.location.href ='./';
    }catch(e:any){
        dispatch({type:'endLoad'});
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
        dispatch({type:'startLoad'});
        const res = await axios.patch(`${api}/lists/update-exist-list/${list._id}`,list);
       if(res.status === 200){

           dispatch({
               type:'clearList',
               payload:list
            })
            dispatch({type:'endLoad'});
            // window.location.reload();
        }

    }catch(e:any){
        dispatch({type:'endLoad'});
    }
}

export const deleteList = (listId:string)=>async(dispatch:any)=>{
    try {
        dispatch({type:'startLoad'});
        const res  =  await axios.delete(`${api}/lists/delete-list/${listId}`);
        if(res.status === 200){
            dispatch({
                type:"deleteList",
                payload:listId,
            })
        }
        dispatch({type:'endLoad'});
    } catch (error) {
        dispatch({type:'endLoad'});
                
    }
}
