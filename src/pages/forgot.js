import React, { useState } from "react"
import { useNavigate } from "react-router";
import { handleForgot } from "../auth/auth";



 function Forgot() {
const [email,setEmail]=useState("");
const[error,setError]=useState("")
const[successMsg,setSuccessMsg]=useState("")
const navigate=useNavigate()


const ForgotUser = async()=>{
    const payload={email}

    handleForgot(payload).then((data)=>{
        if (data.error) {
            setError(data.error)

        }else{
            setSuccessMsg(data.message)
            localStorage.setItem("token",data.token)
        }
        navigate("/resetpass")
        
    })



}

    return(
        <div>
          <ForgotForm 
          email={email}
          setEmail={setEmail}
          ForgotUser={ForgotUser}
          
          />
                     {error ? <div className="err-msg">{error}</div> : ""}
            {successMsg ? <div className="success-msg">{successMsg}</div> : ""}

        </div>
    )
    
};

function ForgotForm ({email,setEmail,ForgotUser}){
    const navigate = useNavigate()
    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent">
         <div className="hero-content flex-col lg:flex-col"> 
        <input type="email" placeholder="@mail.com " className="input input-bordered 
        input-error w-full max-w-xs m-2"  
         value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
        
        <div className="form-control mt-6">
          <button className="btn btn-active btn-ghost m-2" onClick={()=>ForgotUser()} >
            Click and check your email  </button>
          <div className="text-m">

          <div className="text-m">
          <a href="/" className="font-medium text-red-600 hover:text-accent-500"
           onClick={()=>navigate("/")}>   Click here to Login page</a>
          </div>
      
          </div>
        </div>
        </div>
        </div>
    
        </div>
    )
}


export default Forgot