import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = "http://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "14f7707e7fade8df0b71693d1a85309c"

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponce = await response.json();
        let result = {
            city:city,
            temp: jsonResponce.main.temp,
            temp_min: jsonResponce.main.temp_min,
            temp_max: jsonResponce.main.temp_max,
            humidity: jsonResponce.main.humidity,
            feelsLike: jsonResponce.main.feels_like,
            weather: jsonResponce.weather[0].description
        };
        console.log(result);
        return result;
        } catch (err) {
            throw err;
        }
    }

    let handleachange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async(event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    }
    return (
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name"
                    value={city}
                    onChange={handleachange}
                    variant='outlined' sx={{
                        '& .MuiOutlinedInput-root fieldset': { borderColor: '#E6D8C3' },
                        '& .MuiInputLabel-root': { color: '#E6D8C3' }
                    }} /> 
                <br></br><br></br>
                <Button variant="contained" style={{ backgroundColor: "#C5C7BC" , color:"black"}}
                    type='submit'>Search</Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    
    )
}