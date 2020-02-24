import React, { Component } from 'react'
import { render } from 'react-dom'
import App from './App'
import './App.css'
import HelloComponent from './components/HelloComponent/HelloComponent'
import GoodByeComponent from './components/GoodByeComponent/GoodByeComponent'

const Sidebar = () => {
  return (
    <div style={{ border: 'solid 1px red', flex: 1 }}>
      <h1>This is Sidebar</h1>
    </div>
  )
}

const MainContent = () => {
  return (
    <div style={{ border: 'solid 1px green', flex: 2 }}>
      <h1>This is main MainContent</h1>
    </div>
  )
}


render(
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Sidebar />
    <MainContent />
  </div>, document.getElementById('root'))
// render(
//   <App>
//     <HelloComponent username="Umair" />
//     <GoodByeComponent username="Umair" />
//   </App>
//   ,document.getElementById('root'))
