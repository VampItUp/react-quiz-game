import {useState} from "react";

function CustomIncrement(){

const [value, setValue] = useState(1);
const [increment, setIncrement] = useState(1);

const onButtonClick = () => {
    setValue(value + increment);
};

const onResetClick = () =>{
    value = 0;
}

const onIncrementChange = (event) => {

    const newIncrement = parseFloat(event.target.value);
    setIncrement(newIncrement);
}

const text = 
increment < 0 ? `Subtract ${Math.abs(increment)}` : `Add ${increment}`;

return(
<div>
    <div>
        <p>"The current value is: {value}"</p>
        <p>"The current increment is: {increment}"</p>
    </div>

    <div>
    <button onClick ={onButtonClick}>{text}</button>
    <button onClick ={onResetClick}>Reset</button>
    </div>

    <div>
        <label htmlFor="increment">Increment:</label>
        <input id="increment" type="range" min="-100" max="100" step="1" value = {increment} onChange={onIncrementChange}/>
    </div>
   
</div>

);

}

export default CustomIncrement;