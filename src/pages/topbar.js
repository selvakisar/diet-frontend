import React from 'react'
import { useNavigate } from 'react-router'
import { BiCalculator } from 'react-icons/bi' 
import { FcPlanner } from 'react-icons/fc';

function TopBar() {
    const navigate=useNavigate();
  return (
  
<div className="navbar bg-rose-700">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div className="flex-1">
    <a href='/' className="btn btn-black normal-case text-xl" onClick={()=>navigate("/")}>Home</a>

    <button  className="btn btn-black normal-case text-xl text-center m-5" onClick={()=>navigate("/bmi")}>{<BiCalculator/>}BMI</button>

    <button  className="btn btn-black normal-case text-xl text-center m-5" onClick={()=>navigate("/plan")}>{<FcPlanner/>}PLAN</button>

  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
    
  </div>
</div>
  )
}


export default TopBar