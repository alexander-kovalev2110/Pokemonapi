import React from 'react'
import { connect } from 'react-redux'
import store from "./index"
import {setItemView} from "./store/actions/viewAction"
import {fetchItem} from "./store/actions/itemAction"
import { fetchList, nextPage, previousPage } from "./store/actions/listAction"

export const listView = (props) => {
    const { results, offset } = props

    const goToItem = (index) => {
        store.dispatch(setItemView())
        store.dispatch(fetchItem(index+1+offset))
    }

    const nextPg = () => {
        store.dispatch(nextPage())
        store.dispatch(fetchList(store.getState().listRed.offset))
    }

    const previousPg = () => {
        store.dispatch(previousPage())
        store.dispatch(fetchList(store.getState().listRed.offset))
    }

    const rows = results.map((row, index) => {      // Creating an array with items list
        return (
            <li key={index}>
                <a className="nav-link" onClick={() => {goToItem(index)}}>{index + 1 + offset}
                    &nbsp;&nbsp;&nbsp;&nbsp;{results[index].name}</a>
            </li>
        )
    })

    return (
         <div>
             <br/>
             <ul className="nav justify-content-end">
                 {rows}
             </ul>

             <ul className="pager">
                 <button onClick={() => store.dispatch(previousPg())}>&#9650;&nbsp; Previous </button>
                 <button onClick={() => store.dispatch(nextPg())}>&#9660;&nbsp; Next </button>
             </ul>
         </div>
    )
}

const mapStateToProps = state => ({
    results: state.listRed.results,
    offset: state.listRed.offset
})

export default connect(mapStateToProps)(listView)
