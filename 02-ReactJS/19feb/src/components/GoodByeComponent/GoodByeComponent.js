import React from 'react'
import './goodbye.css'

const GoodByeComponent = ({ username }) => {
    return (
        <div className="GoodBye-comp">
            <h1>Good Bye {username}</h1>
        </div>
    )
}

export default GoodByeComponent