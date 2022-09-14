 import * as actions from '../actions/itemAction'

export const initialState = {
    pokemon: {
        id: null,
        name: "",
        img: "",
        moves: [],
        stats: []
    }
}

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_POKEMON:
            return { ...state, pokemon: action.pokemon}
        default:
            return state
    }
}
