import   { combineReducers } from 'redux'
import itemReducer from "./itemReducer"
import listReducer from "./listReducer"
import viewReducer from "./viewReducer";

const rootReducer = combineReducers({
    itemRed: itemReducer,
    listRed: listReducer,
    viewRed: viewReducer
})

export default rootReducer
