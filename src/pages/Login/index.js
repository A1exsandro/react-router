import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = login => {
		setEmail(login.email)
		setPassword(login.password) 
	} 
	
	// LOGIN FIREBASE WITH EMAIL
	const auth = getAuth()

	createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user
    // ...
  })
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    // ..
  });

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
      </div>
    </>
	)
}

export default Login