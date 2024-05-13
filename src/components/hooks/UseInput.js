import { useState } from "react"

export default function useInput (defaultValue, isValid){
const [enteredVlaue, setEnteredValue] = useState(defaultValue)
const [isEdit, setIsEdit] = useState(false)

const valueIsValid = isValid(defaultValue)
const handleInputChange = (e) => {
    setEnteredValue(e.target.value)
}

const handleInputBlur = () => {
setIsEdit(false)
}
return {
    value: enteredVlaue,
    handleInputBlur,
    handleInputChange, 
    hasError: isEdit && !valueIsValid
}
}

