import React, { useState } from "react";
import SearchComponent from "./search/Searchcomp";
import Mainweather from "./left/Mainweather";
import Header from "./Header";


const Home = () => {

    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchWeatherData = (location) => {
        const apiKey = 'e44c5a46255c5dd9c98fe84dbca089dc';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

        setIsLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setWeatherData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    };
    return (
        <>
            <div className="homeWrap">
                <div className="weatherSection">
                    <Header />
                    <SearchComponent fetchWeatherData={fetchWeatherData} isLoading={isLoading} />
                    <Mainweather weatherData={weatherData} />
                </div>
            </div>
        </>
    )
}

export default Home;