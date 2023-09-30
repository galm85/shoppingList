import jwtDecode from 'jwt-decode';
import { Action, UserReducer } from '../../Types';


const initialState:UserReducer = {
    user:localStorage.getItem('shopping-list') ? jwtDecode(String(localStorage.getItem('shopping-list'))) : null
}

export const userReducer = (state=initialState,action:Action)=>{

    switch(action.type){

        case 'register':
            return {
                ...state,
                user:action.payload
            }

        case 'login':
            return {
                ...state,
                user:action.payload
            }

        case 'logout':
            return {
                ...state,
                user:null
            }



        default: return state
    }

}