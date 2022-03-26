import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

export const CountriesList = (props) => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        setCountries(props.countriesData)
    }, [props.countriesData]);
    
    return (
        <>
            <div>
                {countries.map((country, index) => {
                    return <Link key={index} to={`/${country.alpha3Code }`}><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag"/>
                    <p>{country.name.common}</p></Link>
                })}
            </div>
        </>
    );
};