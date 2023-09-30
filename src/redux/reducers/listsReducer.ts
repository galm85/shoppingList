import { Action, ListReducer } from "../../Types"


const initialState:ListReducer = {
    lists:[]
}

export const listReducer = (state=initialState,action:Action)=>{

    switch(action.type){

        case 'saveNewList':
            const newList = [...state.lists];
            newList.push(action.payload);
            return {
                ...state,
                listReducer:newList
            }

        case 'getAllLists':
            return{
                ...state,
                lists:action.payload
            }


        default: return state
    }

}