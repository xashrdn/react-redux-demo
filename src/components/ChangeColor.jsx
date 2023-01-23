import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

const ChangeColor = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const change = () => {
    dispatch(changeColor(color));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button onClick={change()}>CHANGE COLOR</button>
    </div>
  );
};

export default ChangeColor;
