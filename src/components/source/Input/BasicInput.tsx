import { Input } from '@/types/Input'
import React from 'react'

const styles = {
  inputContainer: "",
  input: "w-full min-w-[320px] h-10 rounded-md pl-4 outline-none"
}

const BasicInput = ({ type, placeholder, submitInput, updateInput }: Input) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        onChange={(event) => updateInput(event.target.value)}
        onKeyDown={submitInput}
      />
    </div>  
    )
}

export default BasicInput