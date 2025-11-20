import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1672638921456-42f48533aef1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2ltcGxlJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500";
    const COLD_URL = "https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500";
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500";
    const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                :COLD_URL
        }
      />
      <CardContent className='card'>
        <Typography gutterBottom variant="h5" component="div">
            {info.city}{
                info.humidity > 80
                ? <ThunderstormIcon></ThunderstormIcon>
                : info.temp > 15
                ? <WbSunnyIcon></WbSunnyIcon>
                :<AcUnitIcon></AcUnitIcon>
          }
        </Typography>
        <Typography variant="body2" component="div">
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.temp_min}&deg;C</p>
                        <p>Max Temp = {info.temp_max}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}