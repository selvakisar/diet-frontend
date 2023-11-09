import React ,{useState} from "react";
import { handleReset } from "../auth/auth";
 

function Reset() {
const [password,setPassword]=useState("")
const [error, setError] = useState("");
const [successMsg, setSuccessMsg] = useState("");


const resetPassword = async  ()=>{
    const payload={password}
    handleReset(payload).then((data)=>{
        if(data.error){
            setError(data.error)
        }else{
            setSuccessMsg(data.message)
            localStorage.setItem("token",data.token)
        }
    })

}

    return (
        <div>
            <ResetForm
            password={password}
            setPassword={setPassword}
            resetPassword={resetPassword}
            
            />
            {error ? <div className="err-msg">{error}</div> : ""}
            {successMsg ? <div className="success-msg">{successMsg}</div> : ""}
        </div>
    )
};

function ResetForm(password,setPassword,resetPassword)
{ 
return(
    <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent">
         <div className="hero-content flex-col lg:flex-col"> 
        <input type="text" placeholder="create new password " className="input input-bordered 
        input-error w-full max-w-xs m-2"  
         value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
        
        <div className="form-control mt-6">
          <button className="btn btn-active btn-ghost m-2" onClick={()=>resetPassword()} >
            reset your password </button>
          <div className="text-m">

         
          </div>
        </div>
        </div>
        </div>
    
        </div>
)
}
export default Reset