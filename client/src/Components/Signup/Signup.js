import React, { useState } from "react";
import { useDispatch} from "react-redux";
import {loginUser, registerUser} from "../../JS/actions/user";
import './Signup.css';
 const Signup = () => {
  const [name, setName] = useState("");
   const  [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const  [password, setPassword] = useState("");
    const  [role, setrole] = useState("");
    const  [phone, setphone] = useState("");
    const  [description, setdescription] = useState("");
    const dispatch = useDispatch();
  return (
    <div className="signbody">
      <title>Slide Navbar</title>
        <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
        <div className="main">  	
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form onSubmit={(e)=>e.preventDefault()}>
              <label htmlFor="chk" aria-hidden="true">Sign up</label>
              <input type="text" placeholder="Name"   onChange={(e)=>setName(e.target.value)}/>
              <input type="text"  placeholder="LastName"  onChange={(e)=> setLastName(e.target.value)}/>
              <input type="email"  placeholder="Email"  onChange={(e)=> setEmail(e.target.value)}/>
              <input type="password"  placeholder="Password"  onChange={(e)=> setPassword(e.target.value)}/>
              <input type="text"  placeholder="role"  onChange={(e)=> setrole(e.target.value)}/>
              <input type="text"  placeholder="phone"  onChange={(e)=> setphone(e.target.value)}/>
              <input type="text"  placeholder="description"  onChange={(e)=> setdescription(e.target.value)}/>
              <button onClick={() => dispatch(registerUser ({name:name , lastName:lastName, email:email , password:password , role:role , phone:phone , description:description}))} >Sign up</button>
            </form>
          </div>
          <div className="login">
            <form onSubmit={(e)=>e.preventDefault()}>
              <label for="chk" aria-hidden="true">Login</label>
              <input type="email"  placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
              <input type="password"  placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
              <button onClick={()=>dispatch(loginUser({email , password}))}>Login</button>
            </form>
          </div>
        </div>
    </div>
  )
}
export default Signup



