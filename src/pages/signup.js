import React, { useState } from "react";
import { useNavigate } from "react-router";
import { handleSignup } from "../auth/auth";

 function Signup() {
   
    

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  const[successMsg,setSuccessMsg]=useState("")


const SignupUser=async () =>{


  const payload ={ name,email,password  }


  handleSignup (payload).then((data)=>{

    if(data.error)
    {
      setError(data.error)
    }
    else{
      setSuccessMsg(data.message)
      localStorage.setItem("token",data.token)
    }
  })
}








  return (
    <div>
       <SignupForm
       name={name}
       setName={setName}
       setEmail={setEmail}
       email={email}
       setPassword={setPassword}
       password={password}
       SignupUser={SignupUser}/>

       {error ?<div className="warning"><h1>{error}</h1></div>:""}
       {successMsg?<div color="accent"><h1>{successMsg}</h1></div>:""}
       
    </div>
  );
}


function SignupForm ({name,setName,password,setPassword,email,setEmail,SignupUser
}) 
{
  const navigate=useNavigate()
    return ( 
 <div>
           <div>
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
      <h1 className="text-7xl font-bold text- bg-"   >Signup now! 

    </h1>
      <p className="py-4"></p>


     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent">
      <form className="card-body">
      
        <div className="form-control">
          <label className="">
          <input type="text" placeholder="name " className="input input-bordered input-error w-full max-w-xs m-2" 
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder="@mail.com " className="input input-bordered input-error w-full max-w-xs m-2"  
         value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="password" className="input input-bordered input-error w-full max-w-xs m-2"
          value={password}
           onChange={(e)=>setPassword(e.target.value)} />

        </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-active btn-ghost m-2" onClick={()=>SignupUser()} >Signup</button>
          
          <div className="text-m">
          <a href="/" className="font-medium text-red-600 hover:text-accent-500" onClick={()=>navigate("/")}>Already have Account</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
      </div>
 </div>
    )
}

export default Signup