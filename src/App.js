import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CountriesList } from './components/CountriesList';
import { Navbar } from './components/Navbar';
import countriesData from './countries.json';
import { CountryDetails } from './components/CountryDetails';
// import { useState } from 'react/cjs/react.production.min';

function App() {
  // const [countries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countriesData={countriesData} />
      <Routes>
        <Route path="/:countryId" element={<CountryDetails countries={countriesData} />} />
      </Routes>
      
    </div>
  );
}

export default App;
