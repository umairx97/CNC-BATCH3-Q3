import React, { Fragment } from 'react'
import HelloWorld from './components/HelloComponent/HelloComponent'
import GoodByeComponent from './components/GoodByeComponent/GoodByeComponent'

const users = ["Umair", "Asad", "Shahbaz"]
const App = (props) => {
    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}


export default App