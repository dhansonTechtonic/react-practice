import React, { Component } from 'react'
import './SearchBar.css'
import spyro from '../Assets/Legend_Spyro.webp'
import DropDown from './DropDown'

class SearchBar extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="search-bar">
                <img src={spyro} alt="spyro the dragon" className="spyro"></img>
                <h1>Spyro-pedia</h1>
                <DropDown toggleDisplay={this.props.toggleDisplay} selected={this.props.selected}/>
            </div>
        )
    }
}

export default SearchBar
