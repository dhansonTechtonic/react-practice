import React, { Component } from 'react'
import './InfoPage.css'

export default class InfoPage extends Component {

    renderSection = (category) => {
        let arr = [];

        let ul = (<ul>{arr}</ul>)
        return ul
    }

    render() {

        return (
            <div className="page" style={{width: '100%', height: '100vh', backgroundSize: 'cover'}}>

            </div>
        )
    }
}
