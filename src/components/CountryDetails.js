import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
// import countriesData from '../countries.json';
import axios from "axios";

export const CountryDetails = () => {
    const [country, setCountry] = useState();

    // useEffect(() => {
    //     const countryDetail = countriesData.find((country) => country.alpha3Code === countryId);
    //     setCountry(countryDetail);
    // }, [countryId]);

    const getCountry = async () => {
        const countryDataFromApi = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);
        setCountry(countryDataFromApi.data);
      };

    const { countryId } = useParams();

    useEffect(() => {
        getCountry();
    }, [country])
    
    // const targetCountry = countriesData.find((country) => country.alpha3Code === countryId);

    // const borders = countriesData.borders;

    return (
        <div>
            {country ? <>
                <h3>Name: {country.name.common}</h3>
                <p>Capitol: {country.capital}</p>
                <p>Area: {country.area}</p>
                <p>Borders:</p>
                    <ul>
                        {country.borders.map((border, index) => {
                            return <li key={index}>{border}</li>
                        })}
                    </ul>
                </> : <p>Loading...</p>}
        </div>
    )
}