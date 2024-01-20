import React, { FormEvent, useState } from 'react'
import { User } from '../Types'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signinUser } from '../redux/actions/usersActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {

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
        console.log(errors);

        setError(errors);

        if(validate){
          
               dispatch(signinUser(user));
            
        }

    }

  return (
    <div className='page login-page'>
        <h2 className='page-title'>התחבר</h2>

        <form className='login-form' onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" name="userName" id="userName" placeholder='שם' onChange={handleChange} autoComplete='off'/>
                <div>{error.userName}</div>
            </div>
            <div className="input-group">
                <input type="password" name="password" id="password" placeholder='סיסמה' onChange={handleChange} autoComplete='off' />
                <div>{error.password}</div>
            </div>
            <div className='login-form-actions'>
                <button className='btn save-btn' type='submit'>התחבר</button>
                <button className='btn delete-btn' type='button'>בטל</button>
            </div>
        </form>

        <div className="redirect">
            <p>עוד אין לך חשבון? <span onClick={()=>navigate('/register')}>לחץ כאן</span></p>
        </div>
    </div>
  )
}

export default Login