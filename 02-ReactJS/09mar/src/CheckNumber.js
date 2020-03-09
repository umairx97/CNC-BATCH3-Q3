import React from 'react'
import { connect } from 'react-redux'

const CheckNumber = (props) => {
  return (
    <div>
      {props.number}
    </div>
  )
}


const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps)(CheckNumber)