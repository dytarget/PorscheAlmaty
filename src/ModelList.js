import React, { Component } from 'react';
import './ModelList.css';
import {Link} from 'react-router-dom';

export class ModelList extends Component {
    state={
        cars:[
            {
                path:"/macan",
                photo:"./img/porsche-thumbwhite (2).webp",
                name:"Macan",
                price:"от 11 090 000 тг"
            },
            {
                path:"/panamera",
                photo:"./img/porsche-thumbwhite (1).webp",
                name:"Panamera",
                price:"от 11 980 000 тг"
            },{
                path:"/p911",
                photo:"./img/porsche-thumbwhite.webp",
                name:"911",
                price:"от 14 990 000 тг"
            },
            {
                path:"/cayenne",
                photo:"./img/porsche-thumbwhite (3).webp",
                name:"Cayenne",
                price:"от 13 290 000 тг"
            }
        ]
    }

    render() {
        return (
            <div>
                <div className="model-list">
                    {this.state.cars.map(car=>{
                        return(
                        <Link to={car.path} className="model">
                            <span id="image"><img src={require(`${car.photo}`)} alt={car.name}/></span>
                            <span id="name">{car.name}</span>
                        </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ModelList;
