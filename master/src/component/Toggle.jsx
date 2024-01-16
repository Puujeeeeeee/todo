import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isOn ? "Turn Off" : "Turn On"}</button>
      <p>The button is {isOn ? "on" : "off"}</p>
    </div>
  );
}

export default Toggle;
