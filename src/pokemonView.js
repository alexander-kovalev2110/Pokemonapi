import React from 'react'
import { connect } from "react-redux"
import ListView from './ListView'
import ItemView from "./ItemView"

export const PokemonView = (props) => {
    const { kindOfView } = props
    if (kindOfView === "item") {
        return (
            <ItemView />
        )
    } else if (kindOfView === "list") {
        return (
            <ListView />
        )
    } else {
        return (
            <div>
                <br/><br/><br/>
                <h1>Press 'Search' button</h1>
            </div>
        )
    }
}

export default connect(state => ({kindOfView: state.viewRed.kindOfView}))(PokemonView)