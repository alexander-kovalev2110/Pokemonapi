import React from 'react'
import store from "./index"
import { fetchItem } from "./store/actions/itemAction"
import { fetchList } from "./store/actions/listAction"
import { setItemView, setListView } from "./store/actions/viewAction"
import { connect } from "react-redux"

export const PokemonSearch = (props) => {
    const selectView = (value) => {
        if (value) {                        // ItemView mod
            store.dispatch(setItemView())
            store.dispatch(fetchItem(value))
        } else {                            // ListView mod
            store.dispatch(setListView())
            store.dispatch(fetchList(props.offset))
        }
    }
    return (
        <div className="search">
            <img src="https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Symbol.jpg" width="20vw" />

            <div className="searchBar" >
                <input id="id" className="searchTerm" type="text" placeholder="Name / Id / nothing" />
                <button type="button" className="searchButton"
                        onClick={() => selectView(document.getElementById("id").value)} >Search</button>
            </div>
        </div>
    )
}

export default connect(state => ({offset: state.listRed.offset}))(PokemonSearch)
