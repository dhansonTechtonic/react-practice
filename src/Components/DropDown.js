import React, { Component } from 'react'
import './DropDown.css'
import {FaAngleDown} from 'react-icons/fa'

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

        return arr
    }

    render() {
        return (
            <div className="dropdown">

            </div>
        )
    }
}

export default DropDown
