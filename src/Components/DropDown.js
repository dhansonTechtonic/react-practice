import React, { Component } from 'react'
import './DropDown.css'
import {FaAngleDown} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const options = [
    'Spyro the Dragon',
    'Spyro 2: Ripto\'s Rage!',
    'Spyro: Year of the Dragon',
]

class DropDown extends Component {
    constructor () {
        super()
        this.state={
            hidden: true
        }
    }

    toggleModal = () => {
        this.setState(prevState => ({
            hidden: !prevState.hidden
        }));
    }

    toggleDisplay = (e) => {
        this.setState({
            hidden: true,
        })
        this.props.toggleDisplay(e.target.id)
    }

    renderOptions = () => {
        let arr = [];
        options.map((item, index) => {
            var div = (<button key={index} onClick={this.toggleDisplay} id={item} className="option-button">{item}</button>)
            arr.push(div)
        })
        return arr
    }

    render() {
        return (
            <div className="dropdown">
                <div className="selection">
                    <p>{this.props.selected}</p>
                    <button onClick={this.toggleModal} className="dropdown-button">
                        <FaAngleDown />
               </button>
                </div>
               <div hidden={this.state.hidden}>
                   <div className="modal">
                        {this.renderOptions()}
                   </div>
               </div> 
            </div>
        )
    }
}

export default DropDown
