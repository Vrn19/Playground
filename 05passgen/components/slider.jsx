import React from "react";

function Slider({ value,onChange }) {
  return (
    <input 
    value={value}
    type="range" 
    onChange={(e) => onChange(e.target.value)}
    min="8" 
    max="50" 
    className="bg-stone-100
    border
    border-black
    rounded-xl
    w-[80px]
    h-[40px]"/>
  )
};

export default Slider;