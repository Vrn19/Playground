import React from 'react';

function Inpt(props) {
  return (
   <input 
   className="flex-1 
   border mt-[10px] mb-[10px]
   bg-gray-200 
   rounded-[30px]
   shadow-lg
   p-[20px] 
   gap=0
   align-center"
    type="text" 
    value={props.pass} 
    readOnly/>
  );
}

export default Inpt;
