import React from 'react'
import { Input } from '@/types/Input'

const styles = {
  inputContainer: "",
  input: "w-full min-w-[320px] h-10 border-b border-light-primary pl-4 outline-none"
}

const UnderlineInput = ({ type, placeholder, submitInput, updateInput }: Input) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        onChange={(event) => updateInput(event.target.value)}
        onKeyDown={submitInput}
      />
    </div>  )
}

export default UnderlineInput