import React from "react";
import { useState } from "react";

const toggleFunct = () => {
  let [toggleForm, setToggleForm] = useState(false);
  return (
    <div>
      <button onClick={() => {setToggleForm(!toggleForm}}>
        ButtonName
      </button>
    </div>
  )
};

export default toggleFunct
