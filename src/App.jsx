// App.js
import './App.css';
import CountryList from './CountryList';
import CountriesData from './data';

function App() {
  return (
    <>
      <CountryList countries={CountriesData} />
    </>
  );
}

export default App;
