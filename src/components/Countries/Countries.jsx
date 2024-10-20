import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data));
    },[])
    return (
        <div>
            <h4>countries: {countries.length}</h4>
            {/* dynamic data load */}
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;