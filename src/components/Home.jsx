import React, { useState } from "react";
import SearchComponent from "./search/Searchcomp";
import Mainweather from "./left/Mainweather";
import Header from "./Header";

const Home = () => {
    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeatherData = (location) => {
        const apiKey = 'e44c5a46255c5dd9c98fe84dbca089dc';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

        setIsLoading(true);
        setError(null); // Reset error before making a new request

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setWeatherData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError('Invalid location. Please enter a valid city.'); // Set error message
                setIsLoading(false);
            });
    };

    return (
        <>
            <div className="homeWrap">
                <div className="weatherSection">
                    <Header />
                    <SearchComponent fetchWeatherData={fetchWeatherData} isLoading={isLoading} weatherData={weatherData} />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Mainweather weatherData={weatherData} />
                </div>
            </div>
        </>
    );
};

export default Home;
