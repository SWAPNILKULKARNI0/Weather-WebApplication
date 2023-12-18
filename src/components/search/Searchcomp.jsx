// SearchComponent.jsx
import React, { useState } from "react";
import { TbLocationSearch } from 'react-icons/tb'
import "../../assets/App.css"

const SearchComponent = ({ fetchWeatherData, isLoading }) => {
    const [location, setLocation] = useState('');

    const searchLocation = () => {
        fetchWeatherData(location);
    };

    return (
        <div className="statWarp">
            <TbLocationSearch className="ricon sicon"></TbLocationSearch>
            <input className="stateMenu serachbar"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Enter location (only US cities)"
                type="text"
            />

            <button className="stateMenu stat1" onClick={searchLocation} disabled={!location || isLoading}>
                {isLoading ? 'Searching...' : 'Search'}
            </button>

        </div>
    );
};

export default SearchComponent;
