import CountDown from "./component/CountDown";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [startCount, setStartCount] = useState(false);

  const handleEnd = () => {
    console.log("count down ended");
    setStartCount(false);
  };

  return (
    <div className="App">
      <CountDown startTime={30 * 1000} start={startCount} onEnd={handleEnd} />
      <button onClick={() => setStartCount(true)}>Start</button>
    </div>
  );
}
