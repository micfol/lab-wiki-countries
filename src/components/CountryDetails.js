import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import countriesData from '../countries.json';

export const CountryDetails = () => {
    const [country, setCountry] = useState();

    const { countryId } = useParams();

    useEffect(() => {
        const countryDetail = countriesData.find((country) => country.alpha3Code === countryId);
        setCountry(countryDetail);
    }, [countryId]);

    const targetCountry = countriesData.find((country) => country.alpha3Code === countryId);

    const borders = targetCountry.borders;

    return (
        <div>
            {country ? <>
                <h3>Name: {country.name.common}</h3>
                <h4>Area: {country.area}</h4>
                <p>Borders:</p>
                    <ul>
                        {borders.map((border, index) => {
                            return <li key={index}>{border}</li>
                        })}
                    </ul>
                </> : "<p>Loading...</p>"}
        </div>
    )
}