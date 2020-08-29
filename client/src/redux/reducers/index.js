import {combineReducers} from 'redux'
import list_reducer from './list_reducer/list_reducer'
import {loggedInReducer, users_reducer} from './users_reducer/users_reducer'

const allReducers = combineReducers({
    list:list_reducer,
    users:users_reducer,
    loggedIn:loggedInReducer
})

export default allReducers