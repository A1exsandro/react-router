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

	const { register, handleSubmit } = useForm()
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
    console.log(user)
    // ...
  })
  .catch((error) => { 
    // ..
    console.log(error)
  })

	// LOGIN FIREBASE WITH GOOGLE

	const provider = new GoogleAuthProvider() 
	const loginWithGoogle = () => signInWithPopup(auth, provider) 
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token)
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
    console.log(errorCode, errorMessage, email)
    const credential = GoogleAuthProvider.credentialFromError(error);
		console.log(credential)
    // ...
  })

	return ( 
    <div className="flex flex-col items-center justify-center mt-10">
      <form 
        className="flex flex-col w-80 text-white bg-black p-4 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="flex flex-col items-center mb-2">
          E-mail
          <input 
          className="rounded-md text-black w-full pl-2"
            {...register("email")} 
          />
        </label>

        <label className="flex flex-col items-center mb-2">
          Password
          <input 
            className="rounded-md text-black w-full pl-2"
            type="password"
            {...register("password")} 
          />
        </label>

        <input 
          className="hover:bg-slate-500 bg-slate-600 
          hover:cursor-pointer my-2 rounded-md"
          type="submit" 
        />
      </form>

      <button 
        className="bg-black w-80 hover:bg-slate-500 rounded-lg mt-4 text-white py-3"
        onClick={loginWithGoogle}
      >
        Login With Google
      </button>
    </div> 
	)
}

export default Login
