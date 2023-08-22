import { useState } from "react";
import CounterHeader from "./assets/components/CounterHeader";
import CounterButtons from "./assets/components/CounterButtons";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);

  const [temperatureColor, setTemperatureColor] = useState('cold');



  return (
    <div className={'background ' + temperatureColor}>
        <CounterHeader count={count}></CounterHeader>
        <CounterButtons count={count} setCount={setCount} temperatureColor={temperatureColor} setTemperatureColor={setTemperatureColor}></CounterButtons>
      </div>
  );
}

export default App; 
