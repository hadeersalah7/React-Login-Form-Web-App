import { useRef, useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: ""
  })

  const [isedit, setIsEdit] = useState({email: false, password: false})
  // const email = useRef()
  // const password = useRef()

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
  const handleInputBlur = (identifir) => {
    setIsEdit(prev => (
      {...prev,
      [identifir]: true}
    ))
}

  const validateEmail = isedit.email && !enteredValues.email.includes("@")
  const validatePassword = isedit.password && enteredValues.password.length < 6
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        
        <Input label="email" type="email" name="email" value={enteredValues.email} 
        onChange={(e) => (handleInputChange("email", e))} onBlur={() => handleInputBlur("email")}
        error={validateEmail && "Please Enter A Valid Email."}
        />

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <Input id="password" type="password" name="password" onChange={(e) => (handleInputChange("password", e))}
           value={enteredValues.password} onBlur={() => handleInputBlur("password")}
           error={validatePassword && "Please Enter A Valid Password."}
           />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
