import {useState} from 'react';
import '../style/form.css'

const Form = ({newLocation}) => {
    const [city, setCity] = useState('');

    const submitCity = (e) => {
        e.preventDefault();
        // console.log({city});
        if(city === "" || !city){ 
            return;
        }
        newLocation(city);
    }

    return(
        <div className="container-form">
            <form onSubmit={submitCity}>
                <div className="container-input">
                    <input type="text" placeholder="Ingrese su ciudad" onChange={(e) =>setCity(e.target.value)}/>
                    <button type="submit" />
                </div> 
            </form>
        </div>
    );
}

export default Form;