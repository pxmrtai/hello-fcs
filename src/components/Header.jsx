import React, {Component} from 'react'
import MainMenu from './MainMenu'
import Logo from './Logo'


export default class Header extends Component{
  render(){
    return(
      <div className="container">
        <Logo/>
        <MainMenu/>
      </div>
    )
  }
}