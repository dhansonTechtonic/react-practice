import React, { Component } from 'react'
import './DisplayPage.css'
import SearchBar from './SearchBar'
import Cards from './Cards'
import {worldNames, worldPics, gamePlot} from './Database'
import {Route} from 'react-router-dom'

class DisplayPage extends Component {
    constructor(){
        super()
        this.state={
            selected: 'Spyro the Dragon',
        }
    }

    toggleDisplay = (selected) => {
        this.setState({
            selected: selected,
        })
    }

    render() {
        if (this.state.selected === 'Spyro the Dragon'){
            return (
                <>
                    <SearchBar toggleDisplay={this.toggleDisplay} selected={this.state.selected} />
                    <div className="info">
                        <h2>{this.state.selected}</h2>
                        <h3>{gamePlot.spyro1}</h3>
                    </div>
                    <Cards cardOptions={worldNames.spyro1} cardPics={worldPics.spyro1} game={'spyro1'}/>
                </>
            )
        } else if (this.state.selected === 'Spyro 2: Ripto\'s Rage!') {
            return (
                <>
                    <SearchBar toggleDisplay={this.toggleDisplay} selected={this.state.selected} />
                    <div className="info">
                        <h2>{this.state.selected}</h2>
                        <h3>{gamePlot.spyro2}</h3>
                    </div>
                    <Cards cardOptions={worldNames.spyro2} cardPics={worldPics.spyro2} game={'spyro2'}/>
                </>
            )
        } else if (this.state.selected === 'Spyro: Year of the Dragon') {
            return (
                <>
                    <SearchBar toggleDisplay={this.toggleDisplay} selected={this.state.selected} />
                    <div className="info">
                        <h2>{this.state.selected}</h2>
                        <h3>{gamePlot.spyro3}</h3>
                    </div>
                    <Cards cardOptions={worldNames.spyro3} cardPics={worldPics.spyro3} game={'spyro3'}/>
                </>
            )
        }
    }
}
export default DisplayPage