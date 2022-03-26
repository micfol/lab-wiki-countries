import './App.css';
import { CountriesList } from './components/CountriesList';
import { Navbar } from './components/Navbar';
import countriesData from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countriesData} />
    </div>
  );
}

export default App;
