import React,{useState} from 'react';
import "./LoginUser.css"
import axios from 'axios'



const LoginUser = ()=>{
    const [user,setUser] = useState({
        email:"",
        password:"",
    })
    const updateUser=(e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })

    }

    const login = ()=>{
        axios.post("http://localhost:9000/login",user)
        .then(res => alert(res))
    }

    return (
        <div className = 'loginUser'>
            {console.log(user)}
            <h1>Login</h1>
            <input type = "email" name="email" value={user.email} placeholder = " Enter Email" onChange={updateUser}></input>
            <input type = "password" name="password" value={user.password} placeholder = " Enter Password" onChange={updateUser}></input>
            <div className="button" onClick={login}>Login</div>
            <div>OR</div>
            <div className="button">Register</div>
        </div>
    )
}
export default LoginUser;