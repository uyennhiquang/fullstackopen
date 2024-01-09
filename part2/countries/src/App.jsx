import axios from "axios";
import { useState, useEffect } from "react";

const Country = ({ country }) => {
  const weatherAPI = import.meta.env.VITE_OPEN_WEATHER;
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${weatherAPI}`)
      .then(re => setWeather(re.data));
  }, [])

  if (!weather) {
    return <></>
  }

  return (
    <>
      <section>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital}</p>
      </section>
      <section>
        <h3>languages:</h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} />
      </section>
      <section>
        <h3>Weather in {country.capital}</h3>
        <p>temperature {(weather.main.temp - 273.15).toPrecision(3)} celsius</p>
        <p>wind {weather.wind.speed} m/s</p>
      </section>
    </>
  );
};
const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches. Specify another filter</p>;
  } else if (countries.length == 1) {
    const theCountry = countries[0];
    return <Country country={theCountry} />;
  } else {
    return countries.map((country) => (
      <p key={country.name.common}>{country.name.common}</p>
    ));
  }
};

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState(null);
  const [matchedCountries, setMatchedCountries] = useState([]);

  useEffect(() => {
    console.log("fetching countries...");
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((re) => setCountries(re.data))
      .catch((e) => console.log(e));
  }, []);

  if (!countries) {
    return null;
  }

  const handleQuery = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setMatchedCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(newQuery)
      )
    );
  };

  return (
    <div>
      find countries <input value={query} onChange={handleQuery} />
      <Countries countries={matchedCountries} />
    </div>
  );
};

export default App;
