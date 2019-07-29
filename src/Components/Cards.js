import React, { Component } from 'react'
import './Cards.css'
import {Link} from 'react-router-dom'

class Cards extends Component {

    renderCard = () => {
        let arr = [];
        this.props.cardOptions.map((item, index) => {
            let route = item.replace(/\s/g, '');
            route = route.replace(/'/g, '');
            route = route.toLowerCase()
            var div = (<Link to={"/homeworld/"+ route} key={item} style={{ color: '#50448c', textDecorationLine: 'none'}}><div className="card" key={index + item + item.length}><h4 key={index}>{item}</h4>
                <img key={index + item} src={this.props.cardPics[index]} alt="homeworld photo" className="card-image"></img></div></Link>)
            arr.push(div)
        })
        return arr
    }

    render() {
        return (
            <div className="card-holder">
                {this.renderCard()}
            </div>
        )
    }
}
export default Cards