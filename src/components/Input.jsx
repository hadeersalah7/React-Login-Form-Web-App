import React from 'react'

export default function Input({...props, id, error}) {
  return (
    <div className="control no-margin">
          <label htmlFor={id}>Email</label>
          <input id={id} type="email" name="email" {...props}/>
          {error && <p>{error}</p>}
        </div>
  )
}
