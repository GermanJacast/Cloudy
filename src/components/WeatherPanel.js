import Form from './Form';
import Card from './Card';
import Clouds from './Clouds';
import React, { useEffect, useState } from 'react';

const WeatherPanel = () => {

    let id = 'appid=57c9dcdd7d3cf2ec6d17ba94091e2bd7';
    let lang = '&lang=es'
    let qcity = '&q=';
    let metric = '&units=metric'
    // Actually
    // let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?"
    // let urlWeather = "https://api.openweathermap.org/data/2.5/weather?"
    // City
    let urlWeatherCity = "https://api.openweathermap.org/data/2.5/weather?";
    let urlForecastCity = "https://api.openweathermap.org/data/2.5/forecast?"

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);


    useEffect(() => {
        const getLocation = async(position) => {
            setLoading(true);

            let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?"
            let urlWeather = "https://api.openweathermap.org/data/2.5/weather?"
            let id = 'appid=57c9dcdd7d3cf2ec6d17ba94091e2bd7';
            let lang = '&lang=es'
            let metric = '&units=metric'

            let posi = position.coords;
            // console.log('Latitude : ' + posi.latitude);
            // console.log('Longitude: ' + posi.longitude);
    
            //Weather
            urlWeather = urlWeather + 'lat=' + posi.latitude + '&lon=' + posi.longitude + '&' + id + lang + metric;
            await fetch(urlWeather).then((response) =>{
                if(!response.ok) throw new Error(response);
                return response.json();
            }).then((weatherData) =>{
                console.log(weatherData);
                setWeather(weatherData);
            }).catch(error =>{
                console.log(error);
                setLoading(false);
                setShow(false);
            });
    
            //Forecast
            urlForecast = urlForecast + 'lat=' + posi.latitude + '&lon=' + posi.longitude + '&' + id + lang + metric;
            await fetch(urlForecast).then((response) =>{
                if(!response.ok) throw new Error(response);
                return response.json();
            }).then((forecastData) =>{
                console.log(forecastData);
                setForecast(forecastData);
    
                setLoading(false);
                setShow(true);
    
            }).catch(error =>{
                console.log(error);
                setLoading(false);
                setShow(false);
            });
        };
        navigator.geolocation.getCurrentPosition(getLocation);
    }, []);

    const getLocationCity = async(loc) => {
        setLoading(true);

        //Weather City
        urlWeatherCity = urlWeatherCity + id + lang + qcity + loc + metric;

        await fetch(urlWeatherCity).then((response) =>{
            if(!response.ok) throw new Error(response);
            return response.json();
        }).then((weatherData) =>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //Forecast City
        urlForecastCity = urlForecastCity + id + lang + qcity + loc + metric;

        await fetch(urlForecastCity).then((response) =>{
            if(!response.ok) throw new Error(response);
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }

    return(
        <React.Fragment>
            <Form
                newLocation = {getLocationCity}
            />
            <Clouds />
            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />
        </React.Fragment>
    );
}

export default WeatherPanel;
