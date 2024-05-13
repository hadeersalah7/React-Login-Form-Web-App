import { useState } from "react"

export default function useInput (defaultValue){
const [enteredVlaue, setEnteredValue] = useState(defaultValue)
const [isEdit, setIsEdit] = useState(false)

const handleInputChange = (e) => {
    setEnteredValue(e.target.value)
}

const handleInputBlur = () => {
setIsEdit(false)
}
return {
    value: enteredVlaue,
    handleInputBlur,
    handleInputChange
}
}

