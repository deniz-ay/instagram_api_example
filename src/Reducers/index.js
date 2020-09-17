import {combineReducers} from 'redux'
import AuthReducers from './AuthReducers'
import ListReducer from './ListReducer'

export default combineReducers({
    authResponse : AuthReducers,
    listResponse : ListReducer,
    
})