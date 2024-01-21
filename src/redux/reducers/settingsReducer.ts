import { SettingReducer } from "../../Types"


const initialState:SettingReducer = {
    loader:false,
    message:'',
}

export const settingReducer = (state=initialState,action:any)=>{

    switch(action.type){

        case 'startLoad':
            return {
                ...state,
               loader:true
            }

        case 'endLoad':
            return{
                ...state,
                loader:false
            }

        case 'addMessage':
            return{
                ...state,
                message:action.payload
            }

        default: return state
    }

}