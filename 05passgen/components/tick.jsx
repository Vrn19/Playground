import React from "react";

function Tick({checked, onClick }) {
  if(checked==true){

  }
  return (
    <button 
    onClick={onClick}
    className="bg-stone-100
    border-l
    rounded-xl
    w-[40px]
    h-[40px]
    shrink-0
    ">
     {checked==true?"✔":""}
    </button>
  )
};

export default Tick;