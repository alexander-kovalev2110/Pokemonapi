import store from "../../index"
import axios from "axios"

export const SET_RESULTS = 'SET_RESULTS'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE'

export const setResults = (results) => ({
    type: SET_RESULTS,
    results: results
})

export const nextPage = () => ({
    type: NEXT_PAGE
})

export const previousPage = () => ({ type: PREVIOUS_PAGE })

export const fetchList = async (offset) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`    //URL string

    try {
        const res = await axios(url)
        store.dispatch(setResults(res.data.results))
    } catch (err) {
        console.log(err)
    }
}
