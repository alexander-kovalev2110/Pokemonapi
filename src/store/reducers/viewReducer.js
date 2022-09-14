import * as actions from '../actions/viewAction'

export const initialState = {
    kindOfView: "empty"         // View options: "empty" / "item" / "list"
}

export default function viewReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_ITEM_VIEW:
            return {...state, kindOfView: "item"}

        case actions.SET_LIST_VIEW:
            return {...state, kindOfView: "list"}

        default:
            return state
    }
}