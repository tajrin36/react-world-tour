import './Country.css'
const Country = ({country}) => {
    console.log(country);
    const {name,flags} = country;
    return (
        <div className='country'>
            <h3>name: {name?.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;