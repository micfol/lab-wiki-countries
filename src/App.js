import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CountriesList } from './components/CountriesList';
import { Navbar } from './components/Navbar';
// import countriesData from './countries.json';
import { CountryDetails } from './components/CountryDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const countryDataFromApi = await axios.get('https://ih-countries-api.herokuapp.com/countries');
    setCountries(countryDataFromApi.data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      <Navbar className="nav" />
      <CountriesList countriesData={countries} />
      <Routes>
        <Route path="/:countryId" element={<CountryDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
