import { useState } from "react";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import useInput from "./hooks/UseInput";
export default function Login() {

  const { value: enteredValue, handleInputBlur: handleBlur, handleInputChange: handleChange, hasError: emailHasError } = useInput("", (value) => isEmail(value) &&
    hasError(value)
  )
  const { value: password, handleInputChange: handlePassChange, handleInputBlur: handlePassBlur, hasError: passHasError } = useInput("",
    value => hasMinLength(value, 6))

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (emailHasError || passHasError) {
      return;
    }
    console.log(enteredEmail, enteredPassword)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">

        <Input label="email" type="email" name="email" value={enteredValue}
          onChange={handleChange} onBlur={handleBlur}
          error={emailHasError && "Please Enter A Valid Email."}
        />

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <Input id="password" type="password" name="password" value={password}
            onChange={handlePassChange} onBlur={handlePassBlur}
            error={passHasError && "Please Enter A Valid Password."}
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
