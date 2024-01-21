import { Action, List, ListReducer } from "../../Types"


const initialState:ListReducer = {
    lists:[],
    currentList:{} as List,
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

        case 'checkProductOnList':
            return{
                ...state,
                currentList:action.payload
            }


        case 'getSingleList':
            return{
                ...state,
                currentList:action.payload
            }
            
        case 'updateList':
            let updateLists = state.lists.map(list => {
                    if(list._id === action.payload._id){
                        return action.payload;
                    }
                    return list;
            })
            return{
                ...state,
                lists:updateLists
            }
        

        case 'clearList':
            return{
                ...state,
                currentList:action.payload
            }

        case 'deleteList':
        return{
                ...state,
                lists: state.lists.filter(list => list._id !== action.payload)
            }
        


        default: return state
    }

}