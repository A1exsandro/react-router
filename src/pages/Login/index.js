import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {  
	GoogleAuthProvider, 
	signInWithPopup, 
	createUserWithEmailAndPassword 
} from "firebase/auth"
import { auth } from "../../services/Firebase"
import { useUserContex } from "../../contexts/UserContext"

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { setInfoUser } = useUserContex()

	const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = login => {
		setEmail(login.email)
		setPassword(login.password) 
		loginWithEmail()
	} 
	
	// LOGIN FIREBASE WITH EMAIL 

	const loginWithEmail = () => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user
    // ...
  })
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    // ..
  })

	// LOGIN FIREBASE WITH GOOGLE

	const provider = new GoogleAuthProvider() 
	const loginWithGoogle = () => signInWithPopup(auth, provider) 
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
		setInfoUser(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
		console.log(credential)
    // ...
  })

	return (
		<>
			<div>Login</div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            E-mail
            <input {...register("email")} />
          </label>
          <label>
            Password
            <input type="password"{...register("password")} />
          </label>
          <input type="submit" />
        </form>
				<button onClick={loginWithGoogle}>Login With Google</button>
      </div>
    </>
	)
}

export default Login