import { useState } from "react"
import SearchBox from "./searchBox"
import InfoBox from "./infoBox"
import "./weatherApp.css";

export default function WeatherApp() {
    const [ weatherInfo, setWeatherInfo ] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        temp_min: 25.05,
        temp_max: 25.05,
        humidity: 47,
        weather: "haze"
    });

    let updateInfo =(newInfo)=> {
        setWeatherInfo(newInfo);
    }
    return (
        <div className="weather-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/weather.mp4" type="video/mp4" />
      </video>
        <div style={{ textAlign: "center" }}>
            <h2 style={{color:"pink"}}>Mini Weather App</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
            </div>
        </div>
    )
}