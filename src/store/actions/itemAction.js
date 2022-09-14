import store from "../../index"
import axios from "axios"

export const SET_POKEMON = 'SET_POKEMON'

export const setPokemon = (pokemon) => ({
    type: SET_POKEMON,
    pokemon: pokemon
})

export const fetchItem = async (value) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${value}`    //URL string
    const err_url = "https://thumbs.dreamstime.com/b/no-pokemon-here-sign-riga-latvia-july-restricted-area-over-white-background-go-very-popular-virtual-74549871.jpg"

    try {
        const res = await axios(url)
        const data = res.data
        const pokemon = {
            id: data.id,
            name: data.name,
            img: data.sprites.other.dream_world.front_default? data.sprites.other.dream_world.front_default :
                data.sprites.front_default? data.sprites.front_default : err_url,
            moves: data.moves,
            stats: data.stats
        }
        store.dispatch(setPokemon(pokemon))
    } catch (err) {
        store.dispatch(setPokemon({ img: err_url, moves: [], stats: [] }))
    }
}
