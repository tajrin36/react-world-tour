const CountryData = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    console.log(country);
    console.log(handleVisitedCountries);
    console.log(handleVisitedFlags);
    return (
        <div>
            <p>Country Data: {country.name.common}</p>
        </div>
    );
};

export default CountryData;