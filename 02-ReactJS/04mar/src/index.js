import React, { Fragment } from 'react'
import { render } from 'react-dom'


const App = (props) => {
  console.log(props)
  return (
    <div><h1>This is a nested Component {props.name}</h1></div>
  )
}


const HOC = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Fragment>
      {isLoggedIn
        ? <Component name="umair" {...rest} />
        : alert("You are not authorized to view this component")}
    </Fragment>
  )
}


render(
  <HOC component={App} exact isLoggedIn={false} />
  ,
  document.getElementById('root')
)
