import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Country() {
  const [country, setCountry] = useState(null)

const Params = useParams()
console.log('params', Params)

const url = `https://restcountries.com/v3.1/name/${Params.countryName}`

useEffect(() => {

  async function displayOneCountry() {
    try {
    const countries = await axios.get(url)
    const countriesBox = countries.data
    console.log('countriesBox', countriesBox[0]);
    setCountry(countriesBox[0])
      
    } catch (error) {
      console.log(error)
      
    }  
  }
  displayOneCountry()

}, [Params.countryName])



if (!country) {
  return <div>Loading...</div>
}
console.log('county', country)


  return (
    <>
    <Navbar/>
    <div className="country-details">
      <h1>Know more here</h1>
      <h1>{country.name.common}</h1>
      <h2>{country.name.official}</h2>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h3>Coat of Arms</h3>
      <img className="coat-of-arms" src={country.coatOfArms.png} alt={country.flags.alt} />
    </div>
    </>
  );
}
