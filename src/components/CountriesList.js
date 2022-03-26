import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

export const CountriesList = (props) => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        setCountries(props.countries)
    }, [props.countries]);
    
    return (
        <>
            <ul>
                {countries.map((country, index) => {
                    return <li key={index}><Link to={`/countries/${country.alpha3Code }`}>{country.name.official}</Link></li>
                })}
            </ul>
        </>
    );
};