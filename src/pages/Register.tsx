import React, { FormEvent, useState } from 'react'
import { User } from '../Types'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/usersActions';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [user,setUser] = useState<User>({} as User);
    const [error,setError] = useState<User>({} as User);
    const dispatch:any = useDispatch();
    const navigate:any = useNavigate();


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
    <div className='page login-page'>
        <h2 className='page-title'>הרשם</h2>

        <form className='login-form' onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" name="userName" placeholder='שם' id="userName" onChange={handleChange} autoComplete='off'/>
                <div>{error.userName}</div>
            </div>
            <div className="input-group">
                <input type="password" name="password" placeholder='סיסמה' id="password" onChange={handleChange} autoComplete='off' />
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
            <div className='login-form-actions'>
                <button className='btn save-btn' type='submit'>הרשם</button>
                <button className='btn delete-btn' type='button'>בטל</button>
            </div>
        </form>
        <div className="redirect">
            <p>יש לך חשבון? <span onClick={()=>navigate('/login')}>לחץ כאן</span></p>
        </div>
    </div>
  )
}

export default Register