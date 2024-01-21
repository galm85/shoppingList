import { Product } from "../../Types"


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

        case 'deleteProduct':
            return{
                ...state,
                products: state.products.filter((product:Product) => product._id !== action.payload)
            }

        default: return state
    }

}