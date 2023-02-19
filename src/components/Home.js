import '../style/home.css'

const Home = () => {
    // const weather = async e => {
  //   e.preventDefault();
  //   let key = '57c9dcdd7d3cf2ec6d17ba94091e2bd7';
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     this.setState({
  //         lat: position.coords.latitude,
  //         long: position.coords.longitude
  //     })
  //   })
  //   await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=${key}`)
  //       .then(res => res.json())
  //       .then(data => console.log(data))

    // navigator.geolocation.getCurrentPosition((position) => {
    //   let lat = position.coords.latitude;
    //   let lon = position.coords.longitude;
    //   // console.log("Latitude is :", position.coords.latitude);
    //   // console.log("Longitude is :", position.coords.longitude);
    //   let api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
      
    // });
  return (
    <div className='container-home'>
        Home
    </div>
  );
};

export default Home;