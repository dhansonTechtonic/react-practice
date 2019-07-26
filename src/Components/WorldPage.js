import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import spyro from '../Assets/Legend_Spyro.webp'
import {worldInfo} from './Database'
import './WorldPage.css'

export default class WorldPage extends Component {

    renderSection = (category) => {
        let arr = [];
        let world = this.props.history.location.pathname.split('/')[2]
        worldInfo[world][category].map((item, index) => {
            let li = (<li key={item.length + index + index} style={{width: '10em'}}>{item}</li>)
            arr.push(li)
        })
        let ul = (<ul>{arr}</ul>)
        return ul
    }

    render() {
        let world = this.props.history.location.pathname.split('/')[2]
        let pic = worldInfo[world].pic
        return (
            <div className="page" style={{backgroundImage: `url(${pic})`, width: '100%', height: '100vh', backgroundSize: 'cover'}}>
                <div className="search-bar">
                    <Link to="/" style={{ textDecorationLine: 'none' }}><img src={spyro} alt="spyro the dragon" className="spyro" style={{
                        marginRight: '1em',
                        position: 'relative',
                        bottom: '-0.7em',
                        width: '8em'
                    }}></img></Link>
                    <h1>Spyro-pedia</h1>
                </div>
                <div className="info">
                    <h2>{worldInfo[world].name}</h2>
                    <h3>{worldInfo[world].description}</h3>
                    <div className="other-info">
                        <div style={{width: 'auto'}}>
                            <h3 className="section-title">Residents</h3>
                            <h5>{worldInfo[world].residents}</h5>
                        </div>
                        <div style={{ width: '10em' }}>
                            <h3 className="section-title">Realms</h3>
                            {this.renderSection('realms')}
                        </div>
                        <div style={{ width: '10em' }}>
                            <h3 className="section-title">Enemies</h3>
                            {this.renderSection('enemies')}
                        </div>
                        <div style={{ width: '10em' }}>
                            <h3 className="section-title">Dragons</h3>
                            {this.renderSection('dragons')}
                        </div>
                        <div style={{ width: '10em' }}>
                            <h3 className="section-title">Characters</h3>
                            {this.renderSection('characters')}
                        </div>
                        <div style={{ width: '10em' }}>
                            <h3 className="section-title">Orbs</h3>
                            {this.renderSection('orbs')}
                        </div>
                        <div style={{ width: '10em' }}>
                            <h3 className="section-title">Eggs</h3>
                            {this.renderSection('eggs')}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
