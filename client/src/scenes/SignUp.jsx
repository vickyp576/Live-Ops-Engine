import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import M from 'materialize-css';
const SignUp = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate()
    const PostData = async()=>{
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return;
          }
        try{
            const response = await fetch("http://localhost:5000/user/signup",{
                method : "post",
                headers: {
                    "Content-type":"application/json"
                },
                body:JSON.stringify({
                    userName,
                    password,
                    email,
                }),
            });
            const data = await response.json();
            if(data.error){
                M.toast({ html: data.error, classes: "#c62828 red darken-3" });
            }else{
                M.toast({ html: data.message, classes: "#43a047 green darken-1" });
                navigate("/signin");
            }
        } catch(err){
            console.log(err);
        }
    }
  return (
    <div className='mycard'>
        <div className='card auth-card input-field'>
            <input type="text" placeholder="username"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            />
            <input type="text" placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="password" placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button className='btn waves-effect waves-light #64b5f6 blue darken-1'
            onClick={()=>PostData()}
            >
                SignUp
            </button>
        </div>
        <div className='card auth-card'>
            Already have an account? <Link style={{'color':"blue !important"}} className="change-color" to="/signin">SignIn</Link>
        </div>
    </div>
  )
}

export default SignUp