import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {

   let [responseObj, setResponseObj] = useState({});

   function getForecast() {
      // weather data fetch function will go here
      fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Rome", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "0462d4d5b8msh8aa6fb4f9ba01e9p1414bejsn527538d2df52"
	}
})
.then(response => response.json())
.then(response => {
setResponseObj(response)
})
.catch(err => {
	console.error(err);
});
   }

   return (
    
    <div>
        <h2>Find Weather Conditions projections for 16 days</h2>
        <button onClick={getForecast}>Get Forecast</button>
        <Conditions
               responseObj={responseObj}
               />
    </div>
   )
   
}

export default Forecast;