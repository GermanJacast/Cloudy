import Spinner from './Spinner';
import '../style/card.css'
import { useState } from 'react';

const Card = ({loadingData, showData, weather, forecast}) => {
    if(loadingData){
        return <Spinner />;
    }

    const today = new Date();
    // const day = today.getDate();
    // // why
    // const month = today.getMonth() + 1; 
    // const year = today.getFullYear();
    // const date = day + '/' + month + '/' + year;
    // console.log(date);
    const month = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const day = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    const dayDate = day[today.getDay()];
    const date =today.getDate() + " de " + month[today.getMonth()];
    // const allDate = day[today.getDay()] + ", " + today.getDate() + " de " + month[today.getMonth()];
    // + " del " + today.getFullYear()
    // console.log(date);
    // -

    let url = "";
    let iconUrl = "";
    // let iconUrl0 = "";
    // let forecastDate0 = "";

    // icon -> change
    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        
        // iconUrl0 = url + forecast.list[0].weather[0].icon + ".png";
        // forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
        // forecastDate0 = forecast.list[0].dt_txt.substring(11, 13);
    }


    return (
        <div className="container-wheater">
            {
            showData === true ? (
                <div className='container-cards'>
                    <div className="container-card">
                        {/* Weather */}
                        <div className="card-actually">
                            <div className='container-title'>
                                <h2 className='date'>{dayDate}</h2>
                                <p className='date'>{date}</p>
                                <h3 className="title">{weather.name}, {weather.sys.country}</h3>
                            </div>
                            <div className="card-content">
                                {/* (weather.main.temp - 273.15) u others */}
                                <img src={iconUrl} alt="icon"/>
                                <h1 className="temp">{(weather.main.temp).toFixed(1)}ºC</h1>
                                <p className="desc">{weather.weather[0].description}</p>
                            </div>
                        </div>
                        <hr />
                        
                        <div className="card-forescast">
                            <div className="card-content">
                                <div className="card-text">
                                    <h3>Temperatura máxima:</h3>
                                    <p>{(weather.main.temp_max).toFixed(1)}ºC</p>
                                </div>
                                <div className="card-text">
                                    <h3>Temperatura mínima: </h3>
                                    <p>{(weather.main.temp_min).toFixed(1)}ºC</p>
                                </div>
                                <div className="card-text">
                                    <h3>sensación térmica: </h3>
                                    <p>{(weather.main.feels_like).toFixed(1)}ºC</p>
                                </div>
                                <div className="card-text">
                                    <h3>Humedad: </h3>
                                    <p>{weather.main.humidity}%</p>
                                </div>
                                <div className="card-text">
                                    <h3>Velocidad del viento: </h3>
                                    <p>{weather.wind.speed}m/s</p>
                                </div>   
                            </div>
                            {/* forecast (rest of the day)*/}
                            <div className='slider-fore'>
                                {/* 
                                // multiply this by 5 more to get the hours for the day (6 in total)
                                // An improvement was made using a 'for' , I still don't know if it works or not, but it shortens code

                                <div className="fore-content">
                                    <p>{forecastDate0}:00</p>
                                    <img src={iconUrl0} alt="icon" />
                                    // <p className="description">{forecast.list[0].weather[0].description}</p>
                                    <p className="temp">{(forecast.list[0].main.temp).toFixed(1)}ºC</p>
                                </div>
                                
                                */}
                                {/* <div> */}
                                {(() => {
                                    let dayF = [];
                                    for (let i= 0; i <= 5; i++){
                                        let imgF = url + forecast.list[i].weather[0].icon + '.png'
                                        dayF.push(
                                            <div className='fore-content'>
                                                <p>{forecast.list[i].dt_txt.substring(11, 13)}:00</p>
                                                <img src={imgF} alt="icon" />
                                                <p className="temp">{(forecast.list[i].main.temp).toFixed(1)}ºC</p>
                                            </div>
                                        );
                                    }
                                    return dayF;
                                })()}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    {/* Forecast (5 day, i think) */}
                    <div className='card-days'>
                        <div className='slider-foree'>
                            {(() => {
                                const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
 
                                let daysC = [];                          
                                for (let i = 5; i <= 39; i++) { 
                                    const date = new Date(forecast.list[i].dt_txt);
                                    const dayOfWeek = days[date.getDay()];
                                    if(forecast.list[i].dt_txt.substring(11, 13) === '00'){
                                        daysC.push(
                                            <div className='df'>
                                                <h3>{dayOfWeek}</h3>
                                            </div>
                                        )
                                    }              
                                    let dd =  url + forecast.list[i].weather[0].icon + '.png';
                                    daysC.push(
                                        <div className="fore">
                                            <p>{forecast.list[i].dt_txt.substring(8, 10) + '/' + forecast.list[i].dt_txt.substring(5, 7) + '/' + forecast.list[i].dt_txt.substring(0, 4) + ' ' +  forecast.list[i].dt_txt.substring(11, 13)}:00</p>
                                            <img src={dd} alt="icon" />
                                            <p className="temp">{(forecast.list[i].main.temp).toFixed(1)}ºC</p>
                                        </div>
                                    );
                                }
                                return daysC;
                            })()}
                        </div>  
                    </div>
                </div>
                ):(
                    <div className='no-data'>
                        <h2 className="text-light">Sin datos</h2>
                    </div>
                )
            }
        </div>
    );
}

export default Card;