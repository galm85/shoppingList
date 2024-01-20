import axios from 'axios';
import jwtDecode from 'jwt-decode';

const api = process.env.REACT_APP_API_URL;

export const registerUser = (user:any)=>async(dispatch:any)=>{

    try{
        const res = await axios.post(`${api}/users/register`,user);
        alert(res.data.message);
        localStorage.setItem('shopping-list',res.data.token);
        const loggeUser = jwtDecode(res.data.token);

        dispatch({
            type:'register',
            payload:loggeUser
        });

        window.location.href = './';
        
        
    }catch(e:any){
        console.log(e);
    }
}


export const signinUser = (user:any)=>async(dispatch:any)=>{

    try{
        const res = await axios.post(`${api}/users/login`,user);
        localStorage.setItem('shopping-list',res.data.token);
        const loggeUser = jwtDecode(res.data.token);

        dispatch({
            type:'login',
            payload:loggeUser
        });

        window.location.href = '/';

    }catch(e:any){
        console.log(e);

    }
}

export const logout = ()=>async(dispatch:any)=>{

    try{
        localStorage.removeItem('shopping-list');

        dispatch({
            type:'logout',
        });

        window.location.href ='/';

    }catch(e:any){
        console.log(e);

    }
}