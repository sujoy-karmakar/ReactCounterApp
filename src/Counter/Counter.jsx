import { useState } from "react"

function Counter(){
let [x, setX]= useState(0)
const handleIncrement= ()=>{
   setX((prevX)=>prevX+=1);
   console.log(x+=1);
};
const handleReset = ()=>{
    setX(0)
}
const handleDecrement = ()=>{
    setX((prevX)=>prevX-=1)
    console.log(x-=1);
}

    return(
<div className="flex items-center justify-center gap-10 flex-col border w-[90%] h-[90vh] md:w-[70%] md:h-[90vh] lg:w-[50%] lg:h-[90vh] p-10 rounded-xl shadow-lg shadow-gray-500">


    <h1 className="text-[150px] font-bold">{x}</h1>
    <div className="flex gap-10">
    
        {/* substraction */}
        <div className="text-3xl">
        <button onClick={handleDecrement} className="bg-red-700 px-2 rounded-md shadow-md shadow-red-400"><i className="fa-solid fa-minus"></i></button>
        </div>
      {/* reset */}
        <div className="text-3xl  ">
        <button onClick={handleReset} className="bg-blue-500 px-2 rounded-md shadow-md shadow-blue-400"><i className="fa-solid fa-arrows-rotate"></i></button>
        </div>
        {/*increment */}
        <div className="text-3xl  ">
    <button onClick={handleIncrement} className="bg-green-500 px-2 rounded-md hover:bg-green-700 shadow-md shadow-green-400"><i className="fa-solid fa-plus"></i></button>
    </div>
       
        
      </div>
</div>
    )
}
export default Counter