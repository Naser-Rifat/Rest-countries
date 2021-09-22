import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>

    </div>
  );
}


function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => setCountries(data))
  })

  return (
    <div>
      <h1>Traveling the world</h1>
      <p>{countries.length}</p>
      {

        countries.map(country =>


          <Country name={country.name} capital={country.capital} flag={country.flag}></Country>
        )


      }

    </div>
  )


}

function Country(props) {
  return (
    <div style={{ border: "3px solid green", margin: "20px 200px", padding: "20px", borderRadius: "15px" }}>
      <img style={{ width: "200px" }} src={props.flag} alt="" />
      <h2>Name: {props.name}</h2>
      <h4>capital: {props.capital}</h4>

    </div>
  )

}

export default App;
