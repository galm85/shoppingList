import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


//reducers
import { productReducer } from './reducers/productsReducer';
import { userReducer } from './reducers/usersReducer';
import { listReducer } from './reducers/listsReducer';
import { settingReducer } from './reducers/settingsReducer'; 



const middleware = [thunk];
const initialState = {};


const rootReducer = combineReducers({
    productReducer,
    userReducer,
    listReducer,
    settingReducer
});


const store = createStore(rootReducer,initialState,compose(
    applyMiddleware(...middleware),
    // composeWithDevTools(),
))



export default store;