import Navbar from "../components/navbar";
import axios from "axios";

export default function Countries() {
    const url = 'https://restcountries.com/v3.1/all';

    // function displayCountries() {
    //     let allCountries = fetch(url).then((response) => {
    //         console.log('country', response.json());
    //     }

    //     )
    // }

    // displayCountries()


    async function displayAllCountries() {
      const countries = await axios.get(url)

      const countriesBox = countries.data

      const slicedData = countriesBox.slice(0, 5);


     slicedData.map(country => {
    console.log(country.name.common);
  });

 return countriesBox;
}

 displayAllCountries()
 
  



//     function getFiveArrays(countries){
//       for(let i=0; i <= 4 && i < countries.length; i++){
//         console.log(countries[i]);
//       }
//     }

    
// async function displayAllCountries() {
//     const countries = await fetch(url).then(res => res.json())
//     console.log("countries", countries)
//     getFiveArrays(countries)
// }

// displayAllCountries()





  return (
    <>
      <Navbar />
      <div>
        <h1>This is my Countries Page</h1>
      </div>

    </>
  );
}
