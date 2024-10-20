import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    // const { country, handleVisitedCountries, handleVisitedFlags } = props;
    return (
        <div>
            <h3>Country Details</h3>
            <hr />
            {/* <CountryData
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}
            {/* alternative way */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;