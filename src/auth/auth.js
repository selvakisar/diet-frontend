import { APIauth } from "../Api/Api";


export async function handleSignup(payload){
    const res = await fetch(`${APIauth}/signup`,
    {
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "Content-Type": "application/json",
        }
    })
    const data=await res.json();
    return data;
}

export async function handleLogin(payload){
    const res = await fetch (`${APIauth}/login`,
    {
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "content-Type": "application/json"
        }
    })
    const data = await res.json();
    return data;
}


export async function handleForgot(payload)
{
    const response = await fetch(`${APIauth}/forgot-password`,
    {
        method:"POST",
        body: JSON.stringify(payload),
        headers:{
            "Content-Type" : "application/json",
        }
    });

    const data = await response.json();
    return data;
}


export async function handleReset(payload)
{
    const urlSearchParams = new URLSearchParams(window.location.search);
    const token = urlSearchParams.get('token');

    console.log(token);

    const response = await fetch(`${APIauth}/reset-password/${token}`,
    {
        method:"POST",
        body: JSON.stringify(payload),
        headers:{
            "Content-Type" : "application/json",
        }
    });

    const data = await response.json();
    return data;
}