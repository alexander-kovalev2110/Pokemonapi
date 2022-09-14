import React from 'react'
import { connect } from 'react-redux'

export const ItemView = (props) => {
    const { id, name, img, moves, stats } = props

    const get_stats = stats.map((item) => {
        return (
            <p> {item.stat.name}: <span className="out">{item.base_stat}</span> </p>
        )
    })

    const get_moves = moves.map((item) => {
        return (
            <span>{ item.move.name} </span>
        )
    })

    return (
        <div>
            <br/>
            <div className="details" align="center">        {/* Pokemon image view */}
                <h1 className="name"> {name} </h1>
                <img src={img} />
                <h3> id: <span className="out">{id}</span></h3>
            </div>
            <div class= "stats">                             {/* Pokemon stats view */}
                <h3>{name}'s stats: </h3>
                    {get_stats}
            </div>
            <div class= "stats">                             {/* Pokemon moves view */}
                <h3>{name}'s moves: </h3>
                    {get_moves}
            </div>`
        </div>
    )
}

const mapStateToProps = state => ({
    id: state.itemRed.pokemon.id,
    name: state.itemRed.pokemon.name,
    img: state.itemRed.pokemon.img,
    moves: state.itemRed.pokemon.moves,
    stats: state.itemRed.pokemon.stats
})

export default connect(mapStateToProps)(ItemView)
