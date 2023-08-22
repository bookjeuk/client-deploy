import React from 'react'
import { Input } from '@/types/Input'

const styles = {
  inputContainer: "",
  input: "w-full min-w-[320px] h-10 border border-light-primary rounded-md pl-4 outline-none"
}
const OutlineInput = ({ type, placeholder, submitInput, updateInput }: Input) => {
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

export default OutlineInput