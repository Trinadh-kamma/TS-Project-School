import React from 'react'
import { useRef, useState, useEffect } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck, faTimes, faInfoCircle, faUser, faEnvelope, faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons"
import "./Login.css";
import students from "../../assets/students.jpg"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';
import LoginService from '../../Services/LoginService';

const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{5,24}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();

const [email, setEmail] = useState("");
const [validEmail, setValidEmail] = useState(false);
const [emailFocus, setEmailFocus] = useState(false)



const [password, setPassword] = useState("")
const [validPassword, setValidPassword] = useState(false)
const [passwordFocus, setPasswordFocus] = useState(false)


const [errMsg, setErrMsg] = useState("")
const [success, setSuccess] = useState(false)

useEffect(() => {
  emailRef.current.focus()
}, [])

useEffect(() => {
  setValidEmail(EMAIL_REGEX.test(email))
}, [email])

useEffect(() => {
  setValidPassword(PASSWORD_REGEX.test(password))
}, [password]);


const handleSubmit = (e) => {
  e.preventDefault();
  // To avoid javascript hack
  const v1 = EMAIL_REGEX.test(email)
  const v3 = PASSWORD_REGEX.test(password)

  if (!v1  || !v3) {
    setErrMsg("Invalid Entry")
    return; 
  }
  console.log(email, password);
  setSuccess(true);
  
}

const handleLogin = () => {
  LoginService.getLoginCreds()
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error);
  })
}

  return (
    <motion.div 
    className="login-container"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:1, ease:"easeInOut"}}>
    {success ?(
      <section>
        <h1>Success !!!</h1>
        <p>
          <a href="#">Sign In</a>
        </p>
      </section>
      ) : (
      <motion.section 
      className="form-section"
      initial={{y:"-100%"}}
      animate={{y:0}}
      transition={{delay:1.5, type:"spring", stiffness:400}}
      >
        <h1 style={{textAlign:'center'}} className="auth">User Login</h1>
        <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email:
        <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"}/>
        <FontAwesomeIcon icon={faTimes} className={validEmail || !email? "hide" : "invalid"}/>
          </label>
          <div className="input-wrapper">
            <input 
              id="email"
              type="text" 
              placeholder="test@gmail.com"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              aria-invalid={"false"}
              aria-describedby='emailnote'
              autoComplete='off'
              required
            />
            <FontAwesomeIcon icon={faEnvelope} className="envelope"/>
          </div>

          <p id="emailnote" className={emailFocus && email && !validEmail?  "suggestion" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle}/>
            Must Include @character <br/>
            Special characters like <br/> ! # $ % & ' - / = ? ^ _ `| ~ are allowed <br/>
            Letters, numbers allowed.
          </p>
          

          <label htmlFor="password">Password:
          <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"}/>
          <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"}/>
          </label>
          <div className="input-wrapper">
            <input 
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            aria-invalid={"false"}
            aria-describedby='passwordnote'
            />
            {validPassword  ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen}/>}
          </div>

          <p id="passwordnote" className={passwordFocus && password && !validPassword? "suggestion" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle}/>
            8 to 24 characters.<br />
            Must include uppercase and lowercase letters <br/>, a number and a special character.<br />
            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
          </p>
          

          <button disabled={!validEmail ||  !validPassword ? true : false}
          onClick={handleLogin}
          >Log in</button>
        </form>
        <div className='or'>
          OR
        </div>
        <button><Link to="/signup" className="signup">Create account</Link></button>
    </motion.section>)}

    <div className="image-section"> 
      <img src={students} alt = "students"/>
    </div>
    </motion.div>
  )
}


export default Login