import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import M from 'materialize-css';
const SignIn = () => {
    const [password,setPassword] = useState("");
    const [userName,setUserName] = useState("");
    const navigate = useNavigate()

    const PostData = async ()=>{
        try {
            const response = await fetch("http://localhost:5000/user/signin", {
              method: "post",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                password,
                userName
              })
            });
        
            const data = await response.json();
              console.log(data)
            if (data.error) {
              M.toast({ html: data.error, classes: "#c62828 red darken-3" });
            } else {
              localStorage.setItem("jwt",data.token)
              localStorage.setItem("user",JSON.stringify(data.user))
              //dispatch({type:"USER",payload:data.user})
              M.toast({ html: "Signin Successfully", classes: "#43a047 green darken-1" });
              navigate("/");
            }
          } 
          catch (err) {
            console.log(err);
          }
    }

  return (
    <div className='mycard'>
        <div className='card auth-card input-field'>
            <input type='text' placeholder='username'
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            />
            <input type='text' placeholder='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button className='btn waves-effect wave-light #64b5f6 blue darken-1'
            onClick={()=>PostData()}
            >
                SignIn
                
            </button>
        </div>
        <div className='card auth-card'>
            Don't have an account? <Link style={{'color': "blue !important"}} to="/signup">SignUp</Link>
        </div>
    </div>
  )
}

export default SignIn