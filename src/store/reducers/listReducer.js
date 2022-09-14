import * as actions from '../actions/listAction'

const length = 898      // Real DB length
const limit = 10        // Number of items per page

export const initialState = {
    results: [],        // Array of pokemons
    offset: 0
}

export default function listReducer(state = initialState, action) {
    const { offset } = state
    switch (action.type) {
        case actions.SET_RESULTS:
            return { ...state, results: action.results}

        case actions.NEXT_PAGE:
            return {...state, offset: ((offset + limit) < length)? (offset + limit): offset}

        case actions.PREVIOUS_PAGE:
            return {...state, offset: ((offset - limit) >= 0)? (offset - limit): offset}

        default:
            return state
    }
}
