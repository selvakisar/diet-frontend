import React ,{useState} from "react";
import { useNavigate } from "react-router";
import { handleLogin } from "../auth/auth";
import Forgot from "./forgot";




export const Login = () =>
{


  
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [error, SetError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
  
    const LoginUser = async () =>
    {
        const payload = {email,password};

       handleLogin(payload).then((data)=>
        {
            if(data.error)
            {
                SetError(data.error);
                console.log(data.error);
              
            }
            else
            {
          
                setSuccessMsg(data.message);
                console.log(data.message);
                localStorage.setItem("token", data.token);
                
            }
        })
    }

    return (
        <div>
           
            <LoginForm

            email={email}
            SetEmail={SetEmail}
            password={password}
            SetPassword={SetPassword}
            LoginUser={LoginUser}
        />
        {error ? <div className="err-msg"><h1>{error}</h1></div> : ""}
        {successMsg ? <div className="success-msg"><h1>{successMsg}</h1></div> : ""}
        </div>
    )
};

function LoginForm({email, SetEmail,password, SetPassword,LoginUser})

{
  const navigate=useNavigate()
    return(<div>
             <div>
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
      <h1 className="text-7xl font-bold text- bg-"   >Login now! 

    </h1>
      <p className="py-3"></p>


     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent">
      <form className="card-body">
      
        <div className="form-control">
          <label className="">
        <input type="email" placeholder="@mail.com " className="input input-bordered input-error w-full max-w-xs m-2" 
          value={email}
            onChange={(e)=>SetEmail(e.target.value)}/>
        <input type="password" placeholder="password" className="input input-bordered input-error w-full max-w-xs m-2"
          value={password}
           onChange={(e)=>SetPassword(e.target.value)} />

        </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-active btn-ghost m-2" onClick={()=>LoginUser()} >Login</button>
          <div className="text-m">
          <a href="/signup" className="font-medium text-purple-600 hover:text-accent-500"
          onClick={()=>navigate("/signup")}>Create Account</a>
          
         
          </div>
          <div className="form-control mt-6">
          <div className="text-m">
          <a href="/forgetpass" className="font-medium text-black-600 hover:text-accent-500
          "onClick={()=><Forgot/>}>Forgot your password?</a>
          </div>
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
export default Login