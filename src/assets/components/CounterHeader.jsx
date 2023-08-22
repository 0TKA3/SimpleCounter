import React, { useState } from "react";


const CounterHeader = (props) => {



    return (
        <h1>{props.count}°C</h1>
    );
}
 
export default CounterHeader;