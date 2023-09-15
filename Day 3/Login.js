import React, {useRef,useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import AuthContext from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from './axios';
const LOGIN_URL ='/auth'    


const Login =()=>  {
  const {setAuth} = useContext(AuthContext);
  const userRef=useRef();
  const errRef = useRef();
  const [email,setEmail]= useState('');
  const [pass, setPass]= useState('');
  const[errMsg, setErrMsg]= useState('');
  const[success, setSuccess]=useState(false);
  

  useEffect(()=> {
    userRef.current.focus();
  }, []) 
  
  useEffect(()=>{
    setErrMsg("")
  },[email,pass]
  )
    const handleSubmit = async (e)=>{
     e.preventDefault();
     console.log(email,pass);
     setEmail('');
     setPass('');
     setSuccess(true);
}  
  return (
    <>
        {success ? (
         <section>
            <h2>Login succesfull!</h2>
            <br/>
            <p>                
                <Link to="/">Go to Home</Link>
            </p>
         </section>
        ):(
      <section>
        <p ref={errRef} className={errMsg ? "errMsg" :
        "offscreen"} aria-live="asseritive">{errMsg}</p>
        <div className='headd'>
        <h2 >Log in</h2></div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Email : </label>
            <input type="text" 
            id="username" 
            ref={userRef}
            autocomplete="off"
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            required
            />

            <label htmlFor="password">Password : </label>
            <input type="password" 
            id="password" 
            onChange={(e)=> setPass(e.target.value)}
            value={pass}
            required
            />
            <button>Sign In</button>
        </form>
        <div className='ll'>
        <p>
         Create an account?<br/>
         <span className="line">
            <Link to="/signup">Sign up</Link>
         </span>
        </p>
        </div>
      </section>
    )}
    </>
  )
  
}
export default Login;