import { React, useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import countriesData from './countries.json';

export const CountryDetails = () => {
    const [country, setCountry] = useState();

    const { countryId } = useParams();

    useEffect(() => {
        const countryDetail = countriesData.find((country) => country.id === countryId)
        setCountry(countryDetail)
    }, [countryId]);


    return (
        <div>
            {country ? <>
                <h3>Name: {country.name.common}</h3>

            </>}
        </div>
    )
}