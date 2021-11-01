import React from 'react';

const Conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                   <table>
                   <tr>
                   <th>Temperature</th>
                   <th>humidity</th>
                   <th>pressure</th>
                   <th>windspeed</th>
                   <th>general-description</th>
                   </tr>
                   <tbody>
                    <tr>
                    <td>{Math.round(props.responseObj.main.temp)}</td>
                    <td>{(props.responseObj.main.humidity)}</td>
                    <td>{(props.responseObj.main.pressure)}</td>
                    <td>{(props.responseObj.main.wind)}</td>
                    <td>{(props.responseObj.main.description)}</td>
                    </tr>
                    </tbody>
                     </table> 
               </div>
           : null
           }
       </div>
   )
}

export default Conditions;