import React from 'react'
import { useRef, useState, useEffect } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck, faTimes, faInfoCircle, faUser, faEnvelope, faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons"
import "./SignUp.css";
import students from "../../assets/students.jpg"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';

const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{5,24}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
	const emailRef = useRef();
	const errRef = useRef();

const [email, setEmail] = useState("");
const [validEmail, setValidEmail] = useState(false);
const [emailFocus, setEmailFocus] = useState(false)

const [user, setUser] = useState("")
const [validUser, setValidUser] = useState(false)
const [userFocus, setUserFocus] = useState(false)

const [password, setPassword] = useState("")
const [validPassword, setValidPassword] = useState(false)
const [passwordFocus, setPasswordFocus] = useState(false)

const [matchPassword, setMatchPassword] = useState("")
const [validMatch, setValidMatch] = useState(false)
const [matchFocus, setMatchFocus] = useState(false)

const [errMsg, setErrMsg] = useState("")
const [success, setSuccess] = useState(false)

useEffect(() => {
	emailRef.current.focus()
}, [])

useEffect(() => {
	setValidEmail(EMAIL_REGEX.test(email))
}, [email])

useEffect(() => {
	setValidUser(USER_REGEX.test(user))
	
}, [user])

useEffect(() => {
	setValidPassword(PASSWORD_REGEX.test(password))
	setValidMatch(password === matchPassword)
}, [password, matchPassword])

const handleSubmit = (e) => {
	e.preventDefault();
	// To avoid javascript hack
	const v1 = EMAIL_REGEX.test(email)
	const v2 = USER_REGEX.test(user)
	const v3 = PASSWORD_REGEX.test(password)

	if (!v1 || !v2 || !v3) {
		setErrMsg("Invalid Entry")
		return;
	}
	console.log(email, user, password);
	setSuccess(true);
	
}

	return (
		<div 
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
			<section 
			className="form-section"
			initial={{y:"-100%"}}
			animate={{y:0}}
			transition={{delay:1.5, type:"spring", stiffness:20}}
			>
				<h1 style={{textAlign:'center'}} className="auth">Create an Account</h1>
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


					<label htmlFor="username">Username:
					<FontAwesomeIcon icon={faCheck} className={validUser ? "valid" : "hide"}/>
					<FontAwesomeIcon icon={faTimes} className={validUser || !user? "hide" : "invalid"}/>
					</label>
					<div className="input-wrapper">
						<input 
							id="username"
							type="text" 
							onChange={(e) => setUser(e.target.value)}
							value={user}
							required
							autoComplete='off'
							onFocus={() => setUserFocus(true)}
							onBlur={() => setUserFocus(false)}
							aria-invalid={"false"}
							aria-describedby='usernote'
						/>
						<FontAwesomeIcon icon={faUser}/>
					</div>

					<p id="usernote" className={userFocus && user && !validUser ? "suggestion" : "offscreen"}>
						<FontAwesomeIcon icon={faInfoCircle}/>
						Must have 6 to 24 characters <br/>
						Must begin with a letter.<br />
						Letters, numbers, underscores, hyphens allowed.
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
					
					<label htmlFor="matchPassword">Repeat Password:
					<FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"}/>
					<FontAwesomeIcon icon={faTimes} className={validMatch ? "hide" : "invalid"}/>
					</label>
					<div className="input-wrapper">
						<input
							id="matchPassword"
							type="password"
							onChange={(e) => setMatchPassword(e.target.value)}
							value={matchPassword}
							required
							onFocus={() => setMatchFocus(true)}
							onBlur={() => setMatchFocus(false)}
							aria-invalid={"false"}
							aria-describedby='matchpasswordnote'
						/>
						{ matchPassword && validMatch ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen}/>}
						
					</div>

					<p id="matchpasswordnote" className={matchFocus && matchPassword && !validMatch? "suggestion" : "offscreen"}>
						<FontAwesomeIcon icon={faInfoCircle}/>
						Must match the above password input field.
					</p>
					<button disabled={!validEmail || !validUser || !validPassword || !validMatch ? true : false}>Sign Up</button>
				</form>
		</section>)}

		</div>
	)
}


export default SignUp