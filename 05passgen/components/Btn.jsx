import React from "react";

function Btn({onClick}){
  return (
    <button 
    onClick={onClick}
    className="bg-blue-500
    font-bold
     border mt-[10px] mb-[10px]
   rounded-[30px]
   shadow-lg
   p-[20px] 
   gap=0
      flex
      item-center
      justify-center " >Copy</button>
  )
};

export default Btn;
