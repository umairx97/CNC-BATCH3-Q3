import React from 'react'
import Username from '../components/Username'
import Password from '../components/Password'

const Home = (props) => {
    return (
        <div>
            <Username username={props.username} />
            <Password password={props.password} />
        </div>
    )
}


export default Home