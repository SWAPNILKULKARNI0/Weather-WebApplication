import React from "react";
import "../../assets/App.css"

import { IoLocation } from "react-icons/io5";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { HiChevronDoubleRight } from "react-icons/hi";
import { FaTemperatureHigh } from "react-icons/fa";
import { IoHardwareChipSharp } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineAir } from "react-icons/md";
import { RiTempHotLine } from "react-icons/ri";
import { HiChevronDoubleLeft } from "react-icons/hi";
import Icon from "./Icon";


const MainWeather = ({ weatherData }) => {
    if (!weatherData || Object.keys(weatherData).length === 0) {
        return (
            <div className="leftWrap">
                <h2>No Data Available</h2>
            </div>
        );
    }
    return (
        <div>
            <div className="leftWrap">
                <div className="ccard">
                    <div className="alldiv">
                        <IoLocation className="micon" />
                        <h1 className="minfo">{weatherData.name}</h1>
                    </div>
                    <div className="alldiv">
                        <BsFillCalendarDateFill className="micon" />
                        <h2 className="minfo">{new Date().toLocaleDateString('en-US')}</h2>
                    </div>
                    <Icon desc={weatherData.weather[0].main} />
                    <div className="alldiv">
                        <HiChevronDoubleRight className="micon icond" />
                        <h2 className="minfo">{weatherData.weather[0].main}</h2>
                        <HiChevronDoubleLeft className="micon icond" />
                    </div>
                    

                    <div className="alldiv divtem">
                        <FaTemperatureHigh className="micon" />
                        <h1 className="minfo">{weatherData.main.temp.toFixed()}<sup>O</sup>C</h1>
                    </div>

                </div>
            </div>
            <div className="cardWrap">
                <ul className="cardList">
                    <div className="icon-block">
                        <li >
                            <IoHardwareChipSharp className="micon" />
                            <h3 className="minfo">{weatherData.main.pressure}</h3>
                            <span className="day-name">
                                <h2 className="disx">Pressure</h2>
                            </span>
                        </li>
                        <li >
                            <WiHumidity className="micon" />
                            <h3 className="minfo">{weatherData.main.humidity}%</h3>
                            <span className="day-name">
                                <h2 className="disx">Humidity</h2>
                            </span>
                        </li>
                        <li >
                            <MdOutlineAir className="micon" />
                            <h3 className="minfo">{weatherData.wind.speed.toFixed()}KMPH</h3>
                            <span className="day-name">
                                <h2 className="disx">Wind Speed</h2>
                            </span>
                        </li>
                        <li >
                            <RiTempHotLine className="micon" />
                            <h3 className="minfo">{weatherData.main.feels_like.toFixed()}<sup>O</sup>C</h3>
                            <span className="day-name">
                                <h2 className="disx">Feels like</h2>
                            </span>
                        </li>
                    </div>
                </ul>
            </div>
        </div>

    )
}

export default MainWeather;
