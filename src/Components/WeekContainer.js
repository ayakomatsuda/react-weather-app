import React from 'react'

import DayCard from './DayCard'

import '../weather.css'


class WeekContainer extends React.Component {
    render() {
        return (
            <div className="weekcontainer">
                <DayCard dotw="Mon" weather="PartlyCloudy" hightemp="78" lowtemp="67" />
                <DayCard dotw="Tue" weather="Sunny" hightemp="83" lowtemp="66" />
                <DayCard dotw="Wed" weather="Rainy" hightemp="77" lowtemp="65" />
                <DayCard dotw="Thu" weather="Snowy" hightemp="78" lowtemp="64" />
                <DayCard dotw="Fri" weather="Cloudy" hightemp="77" lowtemp="62" />
                <DayCard dotw="Sat" weather="Sunny" hightemp="71" lowtemp="61" />
                <DayCard dotw="Sun" weather="Rainy" hightemp="70" lowtemp="60" />
            </div>
        )
    }
}

export default WeekContainer
