import React from "react";
import "../../assets/App.css"
import { BsSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsFillCloudSunFill } from "react-icons/bs";
import { IoMdCloudy } from "react-icons/io";
import { BsFillCloudsFill } from "react-icons/bs";
import { IoRainy } from "react-icons/io5";
import { PiCloudRainDuotone } from "react-icons/pi";
import { IoMdThunderstorm } from "react-icons/io";
import { FaRegSnowflake } from "react-icons/fa";
import { TbMist } from "react-icons/tb";


const Icon = ({ desc }) => {

    const a = desc;
    let b = ''
    var today = new Date().getHours();

    if (a === 'Clear sky') {
        if (today >= 19 && today <= 7) {
            b = <BsMoonStarsFill className="iconreact" />
        } else {
            b = <BsSunFill className="iconreact" />
        }
    }
    if (a === 'Clear') {
        if (today >= 19 && today <= 7) {
            b = <BsMoonStarsFill className="iconreact" />
        } else {
            b = <BsSunFill className="iconreact" />
        }
    }
    else if (a === 'Few clouds') {
        b = <BsFillCloudSunFill className="iconreact" />
    }

    else if (a === 'Scattered clouds') {
        b = <IoMdCloudy className="iconreact" />
    }
    else if (a === 'Broken clouds') {
        b = <BsFillCloudsFill className="iconreact" />
    }
    else if (a === 'Clouds') {
        b = <BsFillCloudsFill className="iconreact" />
    }
    else if (a === 'Shower rain') {
        b = <IoRainy className="iconreact" />
    }
    else if (a === 'Rain') {
        b = <PiCloudRainDuotone className="iconreact" />
    }
    else if (a === 'Thunderstorm') {
        b = <IoMdThunderstorm className="iconreact" />
    }
    else if (a === 'Snow') {
        b = <FaRegSnowflake className="iconreact" />
    }
    else if (a === 'Mist') {
        b = <TbMist className="iconreact" />
    }

    else {
        b = 'not desc'
    }

    return (
        <div>
            {b}
        </div>
    )
}

export default Icon;