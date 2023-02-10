import React, { useState } from 'react';
import "./RegisterUser.css"
import axios from 'axios'

const RegisterUser = ()=>{
    const [user,setUser] = useState({
        name:"",
        email:"",
        mobile:"",
        age:"",
        password:"",
        cpassword:"",
    })
    const updateUser=(e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })

    }

    const register = ()=>{
        const {name,email,mobile,age,password} = user;
        if(name && email && mobile && age && password && age>=18 && age<=65 && (password===user.cpassword))
        {
            alert("posted");
            axios.post("http://localhost:9000/register",user)
            .then(res=>alert(res))
        }
        else
        {
            alert("invalid details ");
        }
    }
    return (
        <div className = 'registerUser'>
            {console.log(user)}
            <h1>Register</h1>
            <input type = "text" name="name" value={user.name} placeholder = " Enter Name" onChange={updateUser}></input>
            <input type = "email" name="email" value={user.email} placeholder = " Enter Email" onChange={updateUser}></input>
            <input type = "text" name="mobile" value={user.mobile} placeholder = " Enter Mobile No" onChange={updateUser}></input>
            <input type = "number" name="age" value={user.age} min="18" max="65" placeholder = "Enter Age" onChange={updateUser}></input>
            <input type = "password" name="password" value={user.password} placeholder = " Enter Password" onChange={updateUser}></input>
            <input type = "password"  name="cpassword" value={user.cpassword} placeholder = " Enter Confirm Password" onChange={updateUser}></input>
            <div className="button" onClick ={register}>Register</div>
            <div>OR</div>
            <div className="button" >Login</div>
        </div>
    )
}
export default RegisterUser;