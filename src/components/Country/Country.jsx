import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries,handleVisitedFlags }) => {
    console.log(country);
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    const { name, flags, area, capital, cca3, population, region, startOfWeek, status, subregion, car } = country;

    const passWithParams = () => {
        handleVisitedCountries(country);
    }
    const passFlagWithParams = () => {
        handleVisitedFlags(country.flags.png);
    }
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'white' }}>name: {name?.common}</h3>
            <img className='country-image' src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Capital: {capital}</p>
            <p>Code: {cca3}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Start of week: {startOfWeek}</p>
            <p>Status: {status}</p>
            <p>Sub-region: {subregion}</p>
            <p>Car-side: {car.side}</p>
            <hr />
            <div className='visit-btn'>
                <button onClick={passFlagWithParams}>Visited flag</button>
                <button onClick={passWithParams}>Mark visited</button>
                <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
                {visited ? 'I have visited this country' : 'I want to visit this country'}
            </div>
        </div>
    );
};

export default Country;