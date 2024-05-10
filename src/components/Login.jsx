import { useRef, useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: ""
  })
  const email = useRef()
  const password = useRef()

  const handleFormSubmit = (e) =>{
    e.preventDefault()
  //  const enteredEmail = email.current.value
  //  const enteredPassword = password.current.value
    console.log(enteredEmail, enteredPassword)
  }

  const handleInputChange = (identifir, e) => {
    setEnteredValues(prev => ({
    ...prev,
      [identifir]: e.target.value
    }))
  }

  const validateEmail = enteredValues.email !== "" && !enteredValues.email.includes("@")
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(e) => (handleInputChange("email", e))} />
          {validateEmail && <p>Please enter a valid email address.</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(e) => (handleInputChange("password", e))}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
