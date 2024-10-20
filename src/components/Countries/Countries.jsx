import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountries(data));
    }, []);

    const handleVisitedCountries = country => {
        console.log("Add this to your visited country")
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        console.log("Add this to your visited flag");
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    return (
        // 


        <div>
            <div className="flag-main-container">
                <h2>Visited flags: {visitedFlags.length}</h2>
                <div className="flag-container">
                    {
                        visitedFlags.map(flag => <img src={flag}></img>)
                    }
                </div>
            </div>
            <div className="list-container">
                <h2>Visited countries: {visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(country => <li className="list" key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {/* dynamic data load */}
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;