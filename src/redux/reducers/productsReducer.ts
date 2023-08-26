

const initialState = {
    products:[]
}

export const productReducer = (state=initialState,action:any)=>{

    switch(action.type){

        case 'getProducts':
            return {
                ...state,
                products:action.payload
            }



        default: return state
    }

}