import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import Navbar from "../components/navbar";
import axios from "axios";

export default function Countries() {
  const [ country, setCountry] = useState([]);


    const url = 'https://restcountries.com/v3.1/all';
    console.log(url)

    useEffect(() => {

      async function displayAllCountries() {
        try {
        const countries = await axios.get(url)
        const countriesBox = countries.data
        setCountry(countriesBox)
          
        } catch (error) {
          console.log(error)
          
        }
        
      }

      displayAllCountries()
  


    }, [])

    console.log('country', country)




  return (
    <>
      <Navbar />
        <h1 className="countries-txt">Countries</h1>

      <div className="outer-div">
        {country.slice(0, 12).map((item) => (
          <div className="inner-div">
            <h1>{item.name.common}</h1>
            <h3>{item.name.official}</h3>
            <img src={item.flags.png} alt={item.flags.alt} className="flag"/>
            <button className="btn">
              <Link className="btn-link" to={`/country/${item.name.common}`}>Learn more</Link>
            </button>
          </div>
        )

        )}
      </div>

    </>
  );
}
