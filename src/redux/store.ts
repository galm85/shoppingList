import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


//reducers
import { productReducer } from './reducers/productsReducer';

export type MainState = {
    productReducer:any,
}


const middleware = [thunk];
const initialState = {};


const rootReducer = combineReducers({
    productReducer
});


const store = createStore(rootReducer,initialState,compose(
    applyMiddleware(...middleware),
    composeWithDevTools(),
))



export default store;