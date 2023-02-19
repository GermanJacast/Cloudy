import { useState } from 'react';
import './App.css';
import WeatherPanel from './components/WeatherPanel';
// import { Route, Routes } from 'react-router-dom';

function App() {
  const [color, setColor] = useState(false);
  // className={`sch ${stateMonday ? 'none-day' : ''}`.trimEnd()}

  return (
    <div className={`App ${color ? 'dark-mode' : 'light-mode'}`.trimEnd()}>
      <div className='toggle'>
        <input type="checkbox" id="toggle-switch" className='changeColor' onClick={() => setColor(!color)}/>
        <label htmlFor='toggle-switch'>
          <span className={`${color ? 'none-icon' : ''}`.trimEnd()}>☀️</span>
          <span className={`${color ? '' : 'none-icon'}`.trimEnd()}>🌙</span>
        </label>
      </div>
      <WeatherPanel />
      
      {/* <li><NavLink onClick={() => changeStateMenu(!stateMenu)} to='/'>Inicio</NavLink></li> */}
      {/* <Routes>
        <Route path='/' element={<WeatherPanel/>} />
        <Route path='*' element={<WeatherPanel/>} />
      </Routes> */}
    </div>
  );
}

export default App;
