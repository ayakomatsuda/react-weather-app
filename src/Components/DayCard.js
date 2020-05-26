import React from 'react'

import PartlyCloudy from '../partlycloudy.png'
import Cloudy from '../cloudy.png'
import Sunny from '../sunny.png'
import Rainy from '../rainy.png'
import Snowy from '../snowy.png'



const DayCard = props => {

    const weatherIcon = () => {
        switch (props.weather) {
            case "PartlyCloudy": return PartlyCloudy;
            case "Cloudy": return Cloudy;
            case "Sunny": return Sunny;
            case "Rainy": return Rainy;
            case "Snowy": return Snowy;
        }
    }

    return (
        <div className="container">
            <div className="card">
                <h5 className="dotw">{props.dotw}</h5>
                <img className="weatherimg" src={weatherIcon()} />
                <div className="temp col-sm-12">
                    <p className="hightemp">{props.hightemp}˚</p>
                    <p className="lowtemp">{props.lowtemp}˚</p>
                </div>
            </div>
        </div>
    )
}

export default DayCard