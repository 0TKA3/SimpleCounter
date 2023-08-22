import './CounterButtons.css'
import React, { useState } from "react";

const CounterButtons = ({ count, setCount, temperatureColor, setTemperatureColor }) => {

    function controlTemp() {
        if(count>=15) {
             setTemperatureColor('warm')
          }
        if(count<15) {
             setTemperatureColor('cold')
          }
        if(count>=25) {
             setTemperatureColor('hot')
          }
        if(count<=-10) {
            setTemperatureColor('super-cold')
        }
        
    }

    const plusCount = ()=> {
        setCount(count+1)
        controlTemp()
    }

    const minusCount = ()=> {
        setCount(count-1)
        controlTemp()
    }



    return (
        <div>
            <button onClick={plusCount}>+</button>
            <button onClick={minusCount}>-</button>
        </div>
    );
}
 
export default CounterButtons;