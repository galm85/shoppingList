import React, { FormEvent, useState } from 'react'
import { User } from '../Types'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/usersActions';

const Register = () => {

    const [user,setUser] = useState<User>({} as User);
    const [error,setError] = useState<User>({} as User);
    const dispatch:any = useDispatch();


    const handleChange = (e:any)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }


    const handleSubmit = async(e:FormEvent) =>{
        e.preventDefault();
        console.log(user);
        let errors:User = {}as User;
        let validate:boolean = true;

        if(!user.userName || user.userName === ""){
            errors.userName ='הכנס שם';
            validate = false;
        }

        if(!user.password || user.password === ''){
            errors.password ='הכנס סיסמה';
            validate = false;
        }
   

        setError(errors);

        if(validate){
           
            dispatch(registerUser(user));
           
        }

    }

  return (
    <div className='page'>
        <h2>הרשם</h2>

        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="firstName">שם</label>
                <input type="text" name="userName" id="userName" onChange={handleChange} autoComplete='off'/>
                <div>{error.userName}</div>
            </div>
            <div className="input-group">
                <label htmlFor="password">סיסמה</label>
                <input type="password" name="password" id="password" onChange={handleChange} autoComplete='off' />
                <div>{error.password}</div>
            </div>
            <div className="input-group">
                <label htmlFor="avatar">תמונה</label>
                <select name="avatar" id="avatar">
                    <option value="1">Lion</option>
                    <option value="2">King</option>
                    <option value="1">Queen</option>
                </select>
                <span></span>
            </div>
            <div>
                <button type='submit'>שמור</button>
                <button type='button'>בטל</button>
            </div>
        </form>
    </div>
  )
}

export default Register